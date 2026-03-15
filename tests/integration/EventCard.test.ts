import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import EventCard from '../../src/components/EventCard.astro';

const props = {
    city: 'Austin',
    dateTime: '2026-03-20T18:30:00-05:00',
    endTime: '2026-03-20T20:30:00-05:00',
    title: 'Weekly Algorithm Practice',
    url: 'https://meetup.com/algoatx/events/123',
    venue: 'Central Library',
};

describe('EventCard', () => {
    test('renders event title', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('Weekly Algorithm Practice');
    });

    test('renders formatted date', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('20');
        expect(html).toContain('2026');
    });

    test('renders venue and city', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('Central Library');
        expect(html).toContain('Austin');
    });

    test('renders event link', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('href="https://meetup.com/algoatx/events/123"');
    });

    test('has aria-label with event details', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('aria-label=');
        expect(html).toContain('opens in new tab');
    });

    test('opens in new tab', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('target="_blank"');
        expect(html).toContain('rel="noopener noreferrer"');
    });

    test('renders datetime attribute on time element', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(EventCard, { props });

        expect(html).toContain('datetime="2026-03-20T18:30:00-05:00"');
    });
});
