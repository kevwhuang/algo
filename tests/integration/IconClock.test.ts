import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import IconClock from '../../src/components/IconClock.astro';

describe('IconClock', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(IconClock);
    });

    test('renders an unfilled size-4 svg hidden from assistive tech', () => {
        expect(html).toContain('<svg class="relative shrink-0 top-px size-4" aria-hidden="true"');
        expect(html).toContain('fill="none"');
        expect(html).toContain('viewBox="0 0 24 24"');
        expect(html).not.toContain(' height=');
        expect(html).not.toContain(' width=');
    });

    test('draws the dial ring and hands as two round-stroked paths in the current color', () => {
        expect(html.split('<path').length - 1).toBe(2);
        expect(html).toContain('stroke="currentColor"');
        expect(html).toContain('stroke-linecap="round"');
        expect(html).toContain('stroke-linejoin="round"');
        expect(html).toContain('stroke-width="2"');
        expect(html).toContain('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"');
        expect(html).toContain('<path d="M12 7v5l3 3"');
    });
});
