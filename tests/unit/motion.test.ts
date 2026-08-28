import { afterEach, describe, expect, test, vi } from 'vitest';

import type { Mock } from 'vitest';

interface BarStub {
    closest: (selector: string) => ElementStub | null;
    dataset: { progress?: string };
    style: { width: string };
}

interface Killable {
    kill: Mock;
    trigger?: ElementStub;
}

interface MotionOptions {
    bars?: BarStub[];
    elements?: ElementStub[];
    fontsReady?: Promise<void>;
    prefersReducedMotion?: boolean;
}

const MOTION_MODES = [
    { name: 'under reduced motion', prefersReducedMotion: true },
    { name: 'without reduced motion', prefersReducedMotion: false },
] as const;

const PROGRESS_DURATION = 1;
const PROGRESS_SELECTOR = '[data-progress]';
const SCROLL_DURATION = 0.8;
const SCROLL_EASE = 'power3.out';
const SCROLL_OFFSET = 60;
const SCROLL_SELECTOR = '[data-scroll]';
const SCROLL_START = 'top 85%';

const { gsapStub, scrollTriggerStub, state } = vi.hoisted(() => {
    const gsapStub = {
        fromTo: vi.fn<(target: unknown, from: unknown, to: Record<string, unknown>) => void>(),
        getTweensOf: vi.fn(() => state.tweensOf),
        registerPlugin: vi.fn(),
        set: vi.fn<(targets: unknown, vars: Record<string, unknown>) => void>(),
        to: vi.fn<(targets: unknown, vars: Record<string, unknown>) => void>(),
    };

    const scrollTriggerStub = {
        getAll: vi.fn(() => state.scrollTriggers),
        refresh: vi.fn(),
    };

    const state = {
        scrollTriggers: [] as Killable[],
        tweensOf: [] as Killable[],
    };

    return { gsapStub, scrollTriggerStub, state };
});

class ElementStub {
    children: ElementStub[];
    closest: (selector: string) => ElementStub | null;
    contains: (target: ElementStub) => boolean;
    dataset: { scrollStagger?: string };

    constructor(children: ElementStub[] = [], scrollStagger?: string) {
        this.children = children;
        this.closest = () => null;
        this.contains = target => children.includes(target) || target === this;
        this.dataset = { scrollStagger };
    }
}

function buildBar(progress?: string, scrollParent: ElementStub | null = null): BarStub {
    return { closest: () => scrollParent, dataset: { progress }, style: { width: '' } };
}

function buildKillable(trigger?: ElementStub): Killable {
    return { kill: vi.fn(), trigger };
}

async function loadMotion({ bars = [], elements = [], fontsReady = Promise.resolve(), prefersReducedMotion = false }: MotionOptions = {}) {
    state.scrollTriggers = [];
    state.tweensOf = [];
    vi.clearAllMocks();
    vi.resetModules();

    const documentStub = {
        addEventListener: vi.fn<(type: string, handler: (event: { target: unknown }) => void) => void>(),
        fonts: { ready: fontsReady },
        querySelectorAll: vi.fn((selector: string) => {
            if (selector === PROGRESS_SELECTOR) return bars;
            if (selector === SCROLL_SELECTOR) return elements;

            return [];
        }),
    };

    const windowStub = {
        matchMedia: vi.fn(() => ({ matches: prefersReducedMotion })),
    };

    vi.stubGlobal('Element', ElementStub);
    vi.stubGlobal('document', documentStub);
    vi.stubGlobal('window', windowStub);

    const { initMotion } = await import('../../src/lib/motion');

    return { documentStub, initMotion, windowStub };
}

vi.mock('gsap', () => ({ default: gsapStub }));
vi.mock('gsap/ScrollTrigger', () => ({ ScrollTrigger: scrollTriggerStub }));

afterEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
});

describe('focusin handling', () => {
    test('ignores a focusin whose target is not an element', async () => {
        const { documentStub } = await loadMotion();

        const [[, focusIn]] = documentStub.addEventListener.mock.calls;

        focusIn({ target: {} });

        expect(gsapStub.set).not.toHaveBeenCalled();
        expect(scrollTriggerStub.getAll).not.toHaveBeenCalled();
    });

    test('ignores a focusin whose target has no data-scroll ancestor', async () => {
        const target = new ElementStub();

        const { documentStub } = await loadMotion();

        const [[, focusIn]] = documentStub.addEventListener.mock.calls;

        focusIn({ target });

        expect(gsapStub.set).not.toHaveBeenCalled();
        expect(scrollTriggerStub.getAll).not.toHaveBeenCalled();
    });

    test('kills only the scroll triggers contained by the focused container and reveals it instantly', async () => {
        const child = new ElementStub();
        const sibling = new ElementStub();
        const tween = buildKillable();

        const container = new ElementStub([child, sibling]);

        child.closest = () => container;

        const { documentStub } = await loadMotion();

        const bare = buildKillable();
        const inside = buildKillable(child);
        const outside = buildKillable(new ElementStub());

        state.scrollTriggers = [bare, inside, outside];
        state.tweensOf = [tween];

        const [[, focusIn]] = documentStub.addEventListener.mock.calls;

        focusIn({ target: child });

        expect(bare.kill).not.toHaveBeenCalled();
        expect(inside.kill).toHaveBeenCalledTimes(1);
        expect(outside.kill).not.toHaveBeenCalled();

        expect(gsapStub.getTweensOf).toHaveBeenCalledExactlyOnceWith([container, child, sibling]);
        expect(tween.kill).toHaveBeenCalledTimes(1);

        expect(gsapStub.set).toHaveBeenNthCalledWith(1, container, { clearProps: 'transform', opacity: 1 });
        expect(gsapStub.set).toHaveBeenNthCalledWith(2, [child, sibling], { clearProps: 'opacity,transform' });
    });

    test('skips the child clear when the focused container has no children', async () => {
        const container = new ElementStub();

        container.closest = () => container;

        const { documentStub } = await loadMotion();

        const [[, focusIn]] = documentStub.addEventListener.mock.calls;

        focusIn({ target: container });

        expect(gsapStub.set).toHaveBeenCalledExactlyOnceWith(container, { clearProps: 'transform', opacity: 1 });
    });
});

describe('initMotion', () => {
    for (const { name, prefersReducedMotion } of MOTION_MODES) {
        test(`kills every existing scroll trigger ${name}`, async () => {
            const { initMotion } = await loadMotion({ prefersReducedMotion });

            const triggers = [buildKillable(), buildKillable()];

            state.scrollTriggers = triggers;

            await initMotion();

            for (const [index, trigger] of triggers.entries()) {
                expect(trigger.kill, `trigger ${index}`).toHaveBeenCalledTimes(1);
            }
        });
    }

    test('matches the reduced-motion media query', async () => {
        const { initMotion, windowStub } = await loadMotion();

        await initMotion();

        expect(windowStub.matchMedia).toHaveBeenCalledExactlyOnceWith('(prefers-reduced-motion: reduce)');
    });
});

describe('initMotion under reduced motion', () => {
    test('writes each progress bar width inline from its data-progress value', async () => {
        const bars = [buildBar('25'), buildBar('80')];

        const { initMotion } = await loadMotion({ bars, prefersReducedMotion: true });

        await initMotion();

        expect(bars.map(bar => bar.style.width)).toEqual(['25%', '80%']);
        expect(gsapStub.to).not.toHaveBeenCalled();
    });

    test('defaults a bar missing data-progress to a zero inline width', async () => {
        const bar = buildBar();

        const { initMotion } = await loadMotion({ bars: [bar], prefersReducedMotion: true });

        await initMotion();

        expect(bar.style.width).toBe('0%');
    });

    test('reveals every data-scroll element instantly at full opacity with transform cleared', async () => {
        const children = [new ElementStub(), new ElementStub()];
        const plain = new ElementStub();

        const element = new ElementStub(children);

        const { initMotion } = await loadMotion({ elements: [element, plain], prefersReducedMotion: true });

        await initMotion();

        expect(gsapStub.set).toHaveBeenNthCalledWith(1, element, { clearProps: 'transform', opacity: 1 });
        expect(gsapStub.set).toHaveBeenNthCalledWith(2, children, { clearProps: 'opacity,transform' });
        expect(gsapStub.set).toHaveBeenNthCalledWith(3, plain, { clearProps: 'transform', opacity: 1 });
        expect(gsapStub.set).toHaveBeenCalledTimes(3);
    });

    test('kills the tweens of every data-scroll element and its children', async () => {
        const firstChild = new ElementStub();
        const secondChild = new ElementStub();
        const tween = buildKillable();

        const first = new ElementStub([firstChild]);
        const second = new ElementStub([secondChild]);

        const { initMotion } = await loadMotion({ elements: [first, second], prefersReducedMotion: true });

        state.tweensOf = [tween];

        await initMotion();

        expect(gsapStub.getTweensOf).toHaveBeenNthCalledWith(1, [first, firstChild]);
        expect(gsapStub.getTweensOf).toHaveBeenNthCalledWith(2, [second, secondChild]);
        expect(gsapStub.getTweensOf).toHaveBeenCalledTimes(2);
        expect(tween.kill).toHaveBeenCalledTimes(2);
    });

    test('registers no tweens and skips the scroll trigger refresh', async () => {
        const { initMotion } = await loadMotion({
            bars: [buildBar('50')],
            elements: [new ElementStub([new ElementStub()], '0.1')],
            prefersReducedMotion: true,
        });

        await initMotion();

        expect(gsapStub.fromTo).not.toHaveBeenCalled();
        expect(gsapStub.to).not.toHaveBeenCalled();
        expect(scrollTriggerStub.refresh).not.toHaveBeenCalled();
    });

    test('reveals synchronously without awaiting the document fonts promise', async () => {
        const bar = buildBar('64');
        const fontsReady = new Promise<void>(() => {});

        const { initMotion } = await loadMotion({ bars: [bar], fontsReady, prefersReducedMotion: true });

        await initMotion();

        expect(bar.style.width).toBe('64%');
    });
});

describe('initMotion without reduced motion', () => {
    test('initializes tweens and refreshes scroll triggers only after the document fonts promise resolves', async () => {
        let resolveFonts = () => {};

        const fontsReady = new Promise<void>((resolve) => {
            resolveFonts = resolve;
        });

        const { documentStub, initMotion } = await loadMotion({ elements: [new ElementStub()], fontsReady });

        const pending = initMotion();

        expect(documentStub.querySelectorAll).not.toHaveBeenCalled();
        expect(scrollTriggerStub.getAll).toHaveBeenCalledTimes(1);
        expect(scrollTriggerStub.refresh).not.toHaveBeenCalled();

        resolveFonts();

        await pending;

        expect(gsapStub.fromTo).toHaveBeenCalledTimes(1);
        expect(scrollTriggerStub.refresh).toHaveBeenCalledTimes(1);
    });

    test('tweens each progress bar to its data-progress width after the scroll duration delay', async () => {
        const firstWrapper = new ElementStub();
        const secondWrapper = new ElementStub();

        const first = buildBar('25', firstWrapper);
        const second = buildBar('80', secondWrapper);

        const { initMotion } = await loadMotion({ bars: [first, second] });

        await initMotion();

        expect(gsapStub.to).toHaveBeenNthCalledWith(1, first, {
            delay: SCROLL_DURATION,
            duration: PROGRESS_DURATION,
            ease: SCROLL_EASE,
            scrollTrigger: { once: true, start: SCROLL_START, trigger: firstWrapper },
            width: '25%',
        });

        expect(gsapStub.to).toHaveBeenNthCalledWith(2, second, {
            delay: SCROLL_DURATION,
            duration: PROGRESS_DURATION,
            ease: SCROLL_EASE,
            scrollTrigger: { once: true, start: SCROLL_START, trigger: secondWrapper },
            width: '80%',
        });

        expect(gsapStub.to).toHaveBeenCalledTimes(2);

        expect(first.style.width).toBe('');
        expect(second.style.width).toBe('');
    });

    test('falls back to the bar itself as the scroll trigger without a data-scroll ancestor', async () => {
        const bar = buildBar('40');

        const { initMotion } = await loadMotion({ bars: [bar] });

        await initMotion();

        expect(gsapStub.to.mock.calls[0][1].scrollTrigger).toEqual({ once: true, start: SCROLL_START, trigger: bar });
    });

    test('tweens a bar missing data-progress to a zero width', async () => {
        const { initMotion } = await loadMotion({ bars: [buildBar()] });

        await initMotion();

        expect(gsapStub.to.mock.calls[0][1].width).toBe('0%');
    });

    test('fades and lifts each unstaggered data-scroll element on a once-only scroll trigger starting at top 85%', async () => {
        const element = new ElementStub();

        const { initMotion } = await loadMotion({ elements: [element] });

        await initMotion();

        expect(gsapStub.fromTo).toHaveBeenCalledExactlyOnceWith(
            element,
            { opacity: 0, y: SCROLL_OFFSET },
            {
                duration: SCROLL_DURATION,
                ease: SCROLL_EASE,
                opacity: 1,
                scrollTrigger: { once: true, start: SCROLL_START, trigger: element },
                y: 0,
            },
        );

        expect(gsapStub.to).not.toHaveBeenCalled();
    });

    test('reveals a staggered container and tweens its hidden children with the data-scroll-stagger value', async () => {
        const children = [new ElementStub(), new ElementStub()];

        const element = new ElementStub(children, '0.15');

        const { initMotion } = await loadMotion({ elements: [element] });

        await initMotion();

        expect(gsapStub.set).toHaveBeenNthCalledWith(1, element, { opacity: 1 });
        expect(gsapStub.set).toHaveBeenNthCalledWith(2, children, { opacity: 0, y: SCROLL_OFFSET });

        expect(gsapStub.to).toHaveBeenCalledExactlyOnceWith(children, {
            duration: SCROLL_DURATION,
            ease: SCROLL_EASE,
            opacity: 1,
            scrollTrigger: { once: true, start: SCROLL_START, trigger: element },
            stagger: 0.15,
            y: 0,
        });

        expect(gsapStub.fromTo).not.toHaveBeenCalled();
    });

    test('falls back to the fade tween for a container whose data-scroll-stagger is 0', async () => {
        const { initMotion } = await loadMotion({ elements: [new ElementStub([new ElementStub()], '0')] });

        await initMotion();

        expect(gsapStub.fromTo).toHaveBeenCalledTimes(1);
        expect(gsapStub.set).not.toHaveBeenCalled();
        expect(gsapStub.to).not.toHaveBeenCalled();
    });
});

describe('module scope', () => {
    test('registers the scroll trigger plugin with gsap', async () => {
        await loadMotion();

        expect(gsapStub.registerPlugin).toHaveBeenCalledExactlyOnceWith(scrollTriggerStub);
    });

    test('subscribes to focusin on the document', async () => {
        const { documentStub } = await loadMotion();

        expect(documentStub.addEventListener).toHaveBeenCalledExactlyOnceWith('focusin', expect.any(Function));
    });
});
