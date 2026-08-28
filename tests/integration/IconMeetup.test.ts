import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import IconMeetup from '../../src/components/IconMeetup.astro';

describe('IconMeetup', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(IconMeetup);
    });

    test('renders an unfilled meetup-tinted svg hidden from assistive tech', () => {
        expect(html).toContain('<svg class="size-(--size-icon) text-meetup" aria-hidden="true"');
        expect(html).toContain('fill="none"');
        expect(html).toContain('viewBox="0 0 24 24"');
        expect(html).not.toContain(' height=');
        expect(html).not.toContain(' width=');
    });

    test('draws the scripted m as three round-stroked paths in the current color', () => {
        expect(html.split('<path').length - 1).toBe(3);
        expect(html).toContain('stroke="currentColor"');
        expect(html).toContain('stroke-linecap="round"');
        expect(html).toContain('stroke-linejoin="round"');
        expect(html).toContain('stroke-width="2"');
        expect(html).toContain('<path d="M5.455 10.82c.935 -2.163 3.045 -3.82 5.545 -3.82c2.104 0 2.844 1.915 2 4l-2 6"');
        expect(html).toContain('<path d="M6.981 7l-3.981 9.914"');
        expect(html).toContain('<path d="M13 11c.937 -2.16 3.071 -3.802 5.42 -3.972c2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094c-.853 1.676 .75 2.586 2.75 2.086"');
    });
});
