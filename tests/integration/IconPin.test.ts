import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import IconPin from '../../src/components/IconPin.astro';

describe('IconPin', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(IconPin);
    });

    test('renders an unfilled size-4 svg hidden from assistive tech', () => {
        expect(html).toContain('<svg class="relative shrink-0 top-px size-4" aria-hidden="true"');
        expect(html).toContain('fill="none"');
        expect(html).toContain('viewBox="0 0 24 24"');
        expect(html).not.toContain(' height=');
        expect(html).not.toContain(' width=');
    });

    test('draws the teardrop outline and center dot as two round-stroked paths in the current color', () => {
        expect(html.split('<path').length - 1).toBe(2);
        expect(html).toContain('stroke="currentColor"');
        expect(html).toContain('stroke-linecap="round"');
        expect(html).toContain('stroke-linejoin="round"');
        expect(html).toContain('stroke-width="2"');
        expect(html).toContain('<path d="M9 11a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"');
        expect(html).toContain('<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"');
    });
});
