import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import Solution from '../../src/sections/Solution.astro';

const props = {
    code: 'function twoSum(nums, target) {\n    const map = new Map();\n    return [];\n}\n',
    lang: 'javascript',
    langLabel: 'JavaScript',
    title: '1. Two Sum',
};

describe('Solution', () => {
    test('renders title as h1', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, { props });

        expect(html).toMatch(/<h1[^>]*>[\s]*1\. Two Sum[\s]*<\/h1>/);
    });

    test('renders language badge', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, { props });

        expect(html).toContain('JavaScript');
    });

    test('renders difficulty badge when provided', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, {
            props: { ...props, difficulty: 'easy' },
        });

        expect(html).toContain('Easy');
    });

    test('renders code in accessible pre element', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, { props });

        expect(html).toMatch(/<pre class="sr-only"[^>]*>/);
        expect(html).toContain('function twoSum');
    });

    test('renders copy button', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, { props });

        expect(html).toContain('aria-label="Copy code"');
        expect(html).toContain('Copy');
    });

    test('renders copy status region', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, { props });

        expect(html).toContain('aria-live="polite"');
    });

    test('renders source code region with aria-label', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Solution, { props });

        expect(html).toContain('aria-label="1. Two Sum source code"');
    });
});
