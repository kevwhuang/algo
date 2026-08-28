import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import EventCard from '../../src/components/EventCard.astro';
import { MEETUP_URL } from '../../src/lib/constants';

const EVENT = {
    city: 'Austin',
    dateTime: '2026-09-03T18:30:00-05:00',
    endTime: '2026-09-03T20:30:00-05:00',
    title: 'September Algorithms Meetup',
    url: 'https://www.meetup.com/algoatx/events/123456789',
    venue: 'Capital Factory',
};

const LOCATION_VARIANTS = [
    { expected: EVENT.venue, missing: 'city', overrides: { city: '' } },
    { expected: EVENT.city, missing: 'venue', overrides: { venue: '' } },
] as const;

const WALL_CLOCK_LENGTH = 19;

const endFormatted = formatDate(EVENT.endTime);
const startFormatted = formatDate(EVENT.dateTime);

function buildEvent(overrides: Partial<typeof EVENT> = {}) {
    return { ...EVENT, ...overrides };
}

function formatDate(dateString: string) {
    const date = new Date(dateString.slice(0, WALL_CLOCK_LENGTH));

    return {
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
        weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
        year: date.getFullYear(),
    };
}

async function renderCard(props: Record<string, unknown> = {}) {
    const container = await AstroContainer.create();

    return container.renderToString(EventCard, { props });
}

describe('EventCard', () => {
    let fallbackHtml: string;
    let html: string;

    beforeAll(async () => {
        fallbackHtml = await renderCard();
        html = await renderCard({ event: EVENT });
    });

    test('pins the wall-clock date mirror to a literal fixture', () => {
        expect(startFormatted).toEqual({ day: 3, month: 'Sep', time: '6:30 PM', weekday: 'Thu', year: 2_026 });
    });

    test('renders the date column as a time element stamped with the raw start datetime', () => {
        expect(html).toMatch(new RegExp(`<time class="events__date[^>]*" datetime="${EVENT.dateTime}"`));
        expect(html).toContain(`>${startFormatted.weekday}</span>`);
        expect(html).toMatch(new RegExp(`<span class="events__day[^>]*" data-day="${startFormatted.day}"[^>]*>${startFormatted.day}</span>`));
        expect(html).toContain(`>${startFormatted.month} ${startFormatted.year}</span>`);
    });

    test('renders the event title in the card name heading', () => {
        expect(html).toMatch(new RegExp(`<h3 class="events__name[^>]*>${EVENT.title}</h3>`));
    });

    test('renders the time range as two stamped times separated by an en dash', () => {
        const datetimes = [...html.matchAll(/<time[^>]*datetime="([^"]+)"/g)].map(match => match[1]);

        expect(datetimes).toEqual([EVENT.dateTime, EVENT.dateTime, EVENT.endTime]);
        expect(html).toMatch(new RegExp(`<time datetime="${EVENT.dateTime}"[^>]*>${startFormatted.time}</time> &ndash; <time datetime="${EVENT.endTime}"[^>]*>${endFormatted.time}</time>`));
        expect(html).toMatch(/<span class="sr-only"[^>]*>Time<\/span>/);
    });

    test('joins the venue and city with a comma in the location row', () => {
        expect(html.split('events__row').length - 1).toBe(2);
        expect(html).toMatch(new RegExp(`<dd[^>]*>${EVENT.venue}, ${EVENT.city}</dd>`));
        expect(html).toMatch(/<span class="sr-only"[^>]*>Location<\/span>/);
    });

    for (const { expected, missing, overrides } of LOCATION_VARIANTS) {
        test(`renders the location without a separator when the event has no ${missing}`, async () => {
            const variant = await renderCard({ event: buildEvent(overrides) });

            expect(variant).toMatch(new RegExp(`<dd[^>]*>${expected}</dd>`));
            expect(variant).not.toContain(`${EVENT.venue}, ${EVENT.city}`);
        });
    }

    test('omits the location row when the event has neither venue nor city', async () => {
        const bare = await renderCard({ event: buildEvent({ city: '', venue: '' }) });

        expect(bare.split('events__row').length - 1).toBe(1);
        expect(bare).toContain('>Time<');
        expect(bare).not.toContain('>Location<');
    });

    test('renders two hidden icons in the detail labels and one without a location', async () => {
        const bare = await renderCard({ event: buildEvent({ city: '', venue: '' }) });

        expect([...html.matchAll(/<dt[^>]*>\s*<svg[^>]*aria-hidden="true"/g)].length).toBe(2);
        expect(html.split('<svg').length - 1).toBe(2);
        expect(bare.split('<svg').length - 1).toBe(1);
    });

    test('composes the aria label from the title and the formatted start', () => {
        const label = `${EVENT.title} \u2014 ${startFormatted.weekday} ${startFormatted.month} ${startFormatted.day}, ${startFormatted.year} at ${startFormatted.time} (opens in new tab)`;

        expect(html).toContain(`aria-label="${label}"`);
    });

    test('links the card to the event url in a new tab', () => {
        expect(html).toMatch(/<a class="events__card/);
        expect(html).toContain(`href="${EVENT.url}" target="_blank"`);
    });

    test('hides the decorative arrow from assistive tech', () => {
        expect(html).toMatch(/<span class="events__arrow[^>]*" aria-hidden="true"[^>]*>&rarr;<\/span>/);
    });

    test('renders the fallback date column as a plain div without a datetime', () => {
        expect(fallbackHtml).toMatch(/<div class="events__date/);
        expect(fallbackHtml.split('<time').length - 1).toBe(0);
        expect(fallbackHtml).not.toContain('datetime=');
        expect(fallbackHtml.split('<span').length - 1).toBe(2);
    });

    test('renders an em dash placeholder for the fallback day', () => {
        expect(fallbackHtml).toMatch(/<span class="events__day[^>]*" data-day="\u2014"[^>]*>\u2014<\/span>/);
    });

    test('renders the no upcoming events copy as the fallback name', () => {
        expect(fallbackHtml).toMatch(/<h3 class="events__name[^>]*>No upcoming events\.<\/h3>/);
    });

    test('labels the fallback card as a meetup invitation', () => {
        expect(fallbackHtml).toContain('aria-label="No upcoming events \u2014 visit us on Meetup (opens in new tab)"');
    });

    test('links the fallback card to the meetup page', () => {
        expect(fallbackHtml).toContain(`href="${MEETUP_URL}" target="_blank"`);
    });

    test('omits the details list entirely without an event', () => {
        expect(fallbackHtml.split('<dl').length - 1).toBe(0);
        expect(fallbackHtml).not.toContain('events__row');
        expect(fallbackHtml).not.toContain('&ndash;');
    });
});
