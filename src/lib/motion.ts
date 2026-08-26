import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PROGRESS_DURATION = 1;
const SCROLL_DURATION = 0.8;
const SCROLL_EASE = 'power3.out';
const SCROLL_OFFSET = 60;
const SCROLL_START = 'top 85%';

function handleFocusIn(event: FocusEvent) {
    const { target } = event;

    if (!(target instanceof Element)) return;

    const revealTarget = target.closest<HTMLElement>('[data-scroll]');

    if (!revealTarget) return;

    ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger && revealTarget.contains(trigger.trigger)) trigger.kill();
    });

    revealInstantly(revealTarget);
}

function initProgressBars() {
    document.querySelectorAll<HTMLElement>('[data-progress]').forEach((bar) => {
        gsap.to(bar, {
            delay: SCROLL_DURATION,
            duration: PROGRESS_DURATION,
            ease: SCROLL_EASE,
            scrollTrigger: {
                once: true,
                start: SCROLL_START,
                trigger: bar.closest('[data-scroll]') ?? bar,
            },
            width: `${bar.dataset.progress ?? 0}%`,
        });
    });
}

function initScrollAnimations() {
    document.querySelectorAll<HTMLElement>('[data-scroll]').forEach((element) => {
        const from: gsap.TweenVars = { opacity: 0, y: SCROLL_OFFSET };
        const stagger = Number.parseFloat(element.dataset.scrollStagger || '0');

        const to: gsap.TweenVars = {
            duration: SCROLL_DURATION,
            ease: SCROLL_EASE,
            opacity: 1,
            scrollTrigger: {
                once: true,
                start: SCROLL_START,
                trigger: element,
            },
            y: 0,
        };

        if (stagger > 0) {
            const children = element.children;

            gsap.set(element, { opacity: 1 });
            gsap.set(children, from);
            to.stagger = stagger;
            gsap.to(children, to);
        } else {
            gsap.fromTo(element, from, to);
        }
    });
}

function revealAll() {
    document.querySelectorAll<HTMLElement>('[data-progress]').forEach((bar) => {
        bar.style.width = `${bar.dataset.progress ?? 0}%`;
    });

    document.querySelectorAll<HTMLElement>('[data-scroll]').forEach(revealInstantly);
}

function revealInstantly(element: HTMLElement) {
    const children = Array.from(element.children);

    gsap.getTweensOf([element, ...children]).forEach(tween => tween.kill());
    gsap.set(element, { clearProps: 'transform', opacity: 1 });

    if (children.length > 0) gsap.set(children, { clearProps: 'opacity,transform' });
}

document.addEventListener('focusin', handleFocusIn);
gsap.registerPlugin(ScrollTrigger);

export async function initMotion(): Promise<void> {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (prefersReducedMotion) {
        revealAll();

        return;
    }

    await document.fonts.ready;

    initProgressBars();
    initScrollAnimations();
    ScrollTrigger.refresh();
}
