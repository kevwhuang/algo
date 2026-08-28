import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import Solution from '../../src/sections/Solution.astro';
import { DIFFICULTIES } from '../../src/lib/constants';
import { collections } from '../../src/content.config';

import type { ComponentProps } from 'astro/types';
import type { Loader, LoaderContext } from 'astro/loaders';

type Props = ComponentProps<typeof Solution>;

interface LoaderRecord {
    data: Props;
    filePath?: string;
    id: string;
}

const DEFAULT_PROPS: Props = {
    code: 'const answer = 6;\nconst base = 7;\nconst product = answer * base;',
    lang: 'javascript',
    langLabel: 'JavaScript',
    title: 'Sample Solution',
};

const DIFFICULTY_CLASSES = {
    easy: 'bg-emerald-15 text-emerald',
    hard: 'bg-red-15 text-red',
    medium: 'bg-amber-15 text-amber',
} as const;

let html: string;
let sqlSolution: Props;

function createLoaderContext() {
    const records: LoaderRecord[] = [];

    const store = {
        clear() {
            records.splice(0);
        },
        set(record: LoaderRecord) {
            records.push(record);
        },
    };

    return { context: { store } as unknown as LoaderContext, records };
}

function getLineCount(code: string) {
    return code.replace(/\n$/, '').split('\n').length;
}

function getLoader(collection: unknown) {
    return (collection as { loader: Loader }).loader;
}

async function loadSqlFixture() {
    const { context, records } = createLoaderContext();

    await getLoader(collections.problems).load(context);

    const record = records.find(candidate => candidate.filePath?.endsWith('.sql'));

    if (!record) throw new Error('Expected a SQL problem in content.');

    return record.data;
}

async function renderSolution(overrides: Partial<Props> = {}) {
    const container = await AstroContainer.create();

    return container.renderToString(Solution, { props: { ...DEFAULT_PROPS, ...overrides } });
}

beforeAll(async () => {
    html = await renderSolution();
    sqlSolution = await loadSqlFixture();
});

describe('Solution', () => {
    test('renders the title as a scroll-revealed h1', () => {
        expect(html).toMatch(new RegExp(`<h1[^>]*data-scroll[^>]*>${DEFAULT_PROPS.title}</h1>`));
    });

    test('labels the outer section with the title', () => {
        expect(html).toMatch(new RegExp(`<section class="section solution" aria-label="${DEFAULT_PROPS.title}"`));
    });

    test('labels the scroll-revealed code section as source code', () => {
        expect(html).toMatch(new RegExp(`<section class="[^"]*" aria-label="${DEFAULT_PROPS.title} source code" data-scroll`));
    });

    test('renders the language badge from the langLabel prop', () => {
        expect(html).toMatch(new RegExp(`<dt class="sr-only"[^>]*>Language</dt>\\s*<dd class="[^"]*bg-cyan-15 text-cyan"[^>]*>${DEFAULT_PROPS.langLabel}</dd>`));
    });

    for (const difficulty of DIFFICULTIES) {
        test(`renders the ${difficulty} difficulty badge with its color classes`, async () => {
            const badgeHtml = await renderSolution({ difficulty });

            expect(badgeHtml).toMatch(new RegExp(`<dt class="sr-only"[^>]*>Difficulty</dt>\\s*<dd class="[^"]*${DIFFICULTY_CLASSES[difficulty]}"[^>]*>${difficulty}</dd>`));
        });
    }

    test('omits the difficulty badge when no difficulty is given', () => {
        expect(html.split('<dd').length - 1).toBe(1);
        expect(html).not.toContain('>Difficulty<');

        for (const difficulty of DIFFICULTIES) {
            expect(html, difficulty).not.toContain(DIFFICULTY_CLASSES[difficulty]);
            expect(html, difficulty).not.toContain(`>${difficulty}</dd>`);
        }
    });

    test('renders the copy button with an accessible label', () => {
        expect(html).toMatch(/<button class="solution__copy [^"]*" aria-label="Copy code" type="button"[^>]*>\s*<span class="solution__label[^"]*"[^>]*>Copy<\/span>/);
    });

    test('renders an empty polite status live region', () => {
        expect(html).toMatch(/<div class="solution__status sr-only" aria-live="polite"[^>]*><\/div>/);
    });

    test('strips the inline theme style from the highlighted pre', () => {
        const preMatch = html.match(/<pre[^>]*>/);

        expect(preMatch).not.toBeNull();
        expect(preMatch?.[0]).toContain('solution__pre');
        expect(preMatch?.[0]).not.toContain('style=');
    });

    test('unwraps spans styled with the default foreground color', async () => {
        const fixtureHtml = await renderSolution(sqlSolution);

        expect(html).toContain('<span style="color:#');
        expect(html).not.toContain('style="color:#E6EDF3"');
        expect(fixtureHtml).not.toContain('style="color:#E6EDF3"');
    });

    test('renders one numbered line per code line', async () => {
        expect(getLineCount(DEFAULT_PROPS.code)).toBe(3);
        expect(html).toContain('solution__code [counter-reset:line]');
        expect(html.split('solution__line').length - 1).toBe(getLineCount(DEFAULT_PROPS.code));

        const trailingHtml = await renderSolution({ code: `${DEFAULT_PROPS.code}\n` });

        expect(trailingHtml.split('solution__line').length - 1).toBe(getLineCount(DEFAULT_PROPS.code));
    });

    test('attaches exactly one copy script hook', () => {
        expect(html.split('<script').length - 1).toBe(1);
        expect(html.split('Solution.astro?astro&type=script').length - 1).toBe(1);
    });

    test('highlights a real sql problem through a non-javascript grammar', async () => {
        expect(sqlSolution.lang).toBe('sql');

        const fixtureHtml = await renderSolution(sqlSolution);

        expect(fixtureHtml).toContain(`>${sqlSolution.title}</h1>`);
        expect(fixtureHtml).toContain(`data-language="${sqlSolution.lang}"`);
        expect(fixtureHtml).toContain('<span style="color:#');
        expect(fixtureHtml).toMatch(new RegExp(`<dd class="[^"]*bg-cyan-15 text-cyan"[^>]*>${sqlSolution.langLabel}</dd>`));
        expect(fixtureHtml).toContain(`>${sqlSolution.difficulty}</dd>`);
        expect(fixtureHtml.split('solution__line').length - 1).toBe(getLineCount(sqlSolution.code));
    });
});
