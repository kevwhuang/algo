import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import IconLeetCode from '../../src/components/IconLeetCode.astro';

describe('IconLeetCode', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(IconLeetCode);
    });

    test('renders an unfilled leetcode-tinted svg hidden from assistive tech', () => {
        expect(html).toContain('<svg class="size-(--size-icon) text-leetcode" aria-hidden="true"');
        expect(html).toContain('fill="none"');
        expect(html).toContain('viewBox="0 0 24 24"');
        expect(html).not.toContain(' height=');
        expect(html).not.toContain(' width=');
    });

    test('draws the bracket mark as three round-stroked paths in the current color', () => {
        expect(html.split('<path').length - 1).toBe(3);
        expect(html).toContain('stroke="currentColor"');
        expect(html).toContain('stroke-linecap="round"');
        expect(html).toContain('stroke-linejoin="round"');
        expect(html).toContain('stroke-width="2"');
        expect(html).toContain('<path d="M12 13h7.5"');
        expect(html).toContain('<path d="M9.424 7.268l4.999 -4.999"');
        expect(html).toContain('<path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313"');
    });
});
