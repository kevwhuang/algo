import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import EventCardEmpty from '../../src/components/EventCardEmpty.astro';

describe('EventCardEmpty', () => {
    test('renders empty state heading', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCardEmpty);

        expect(html).toContain('No upcoming events');
    });

    test('renders Meetup link', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCardEmpty);

        expect(html).toContain('href="https://meetup.com/algoatx"');
    });

    test('has aria-label', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCardEmpty);

        expect(html).toContain('aria-label="No upcoming events');
    });

    test('opens in new tab', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCardEmpty);

        expect(html).toContain('target="_blank"');
        expect(html).toContain('rel="noopener noreferrer"');
    });
});
