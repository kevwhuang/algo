import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import IconLogo from '../../src/components/IconLogo.astro';

describe('IconLogo', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(IconLogo);
    });

    test('renders a cyan token-sized svg hidden from assistive tech', () => {
        expect(html).toContain('<svg class="size-(--size-icon) text-cyan" aria-hidden="true"');
        expect(html).toContain('viewBox="0 0 32 32"');
        expect(html).not.toContain('fill="none"');
        expect(html).not.toContain(' height=');
        expect(html).not.toContain(' width=');
    });

    test('draws three filled nodes joined by three stroked edges in the current color', () => {
        expect(html.split('<circle').length - 1).toBe(3);
        expect(html.split('<line').length - 1).toBe(3);
        expect(html.split('<path').length - 1).toBe(0);
        expect(html).toContain('<circle cx="8" cy="14" fill="currentColor" r="3"');
        expect(html).toContain('<circle cx="16" cy="22" fill="currentColor" r="3"');
        expect(html).toContain('<circle cx="20" cy="10" fill="currentColor" r="3"');
        expect(html).toContain('<line stroke="currentColor" stroke-width="1.5" x1="8" x2="16" y1="14" y2="22"');
        expect(html).toContain('<line stroke="currentColor" stroke-width="1.5" x1="16" x2="20" y1="22" y2="10"');
        expect(html).toContain('<line stroke="currentColor" stroke-width="1.5" x1="20" x2="8" y1="10" y2="14"');
        expect(html).not.toMatch(/<circle[^>]*stroke/);
        expect(html).not.toMatch(/<line[^>]*fill/);
    });
});
