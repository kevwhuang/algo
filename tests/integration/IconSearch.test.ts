import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import IconSearch from '../../src/components/IconSearch.astro';

describe('IconSearch', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(IconSearch);
    });

    test('renders an unfilled overlay-positioned svg hidden from assistive tech', () => {
        expect(html).toContain('<svg class="absolute left-4 top-1/2 size-5 text-zinc-400 -translate-y-1/2 pointer-events-none" aria-hidden="true"');
        expect(html).toContain('fill="none"');
        expect(html).toContain('viewBox="0 0 24 24"');
        expect(html).not.toContain(' height=');
        expect(html).not.toContain(' width=');
    });

    test('draws the magnifier as one round-capped path in the current color', () => {
        expect(html.split('<path').length - 1).toBe(1);
        expect(html).toContain('stroke="currentColor"');
        expect(html).toContain('stroke-linecap="round"');
        expect(html).toContain('stroke-width="2"');
        expect(html).toContain('<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"');
        expect(html).not.toContain('stroke-linejoin');
    });
});
