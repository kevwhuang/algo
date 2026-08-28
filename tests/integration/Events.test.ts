import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { afterEach, describe, expect, test, vi } from 'vitest';

import Events from '../../src/sections/Events.astro';
import { MEETUP_URL } from '../../src/lib/constants';

interface ApolloEvent {
    dateTime: string;
    endTime: string;
    eventUrl: string;
    status: string;
    title: string;
    venue: { __ref: string } | null;
}

const DEFAULT_EVENT: ApolloEvent = {
    dateTime: '2026-09-03T18:30:00-05:00',
    endTime: '2026-09-03T20:30:00-05:00',
    eventUrl: 'https://www.meetup.com/algoatx/events/123456789',
    status: 'ACTIVE',
    title: 'Weekly Algorithms Meetup',
    venue: null,
};

const DROPPED_EVENTS: readonly [string, Partial<ApolloEvent>][] = [
    ['a non-active status', { status: 'DRAFT' }],
    ['a missing event url', { eventUrl: '' }],
    ['a missing title', { title: '' }],
    ['an unparseable start time', { dateTime: 'someday' }],
    ['an unparseable end time', { endTime: 'someday' }],
    ['an end time before the start time', { endTime: '2026-09-03T17:30:00-05:00' }],
];

const MAX_EVENTS = 5;
const OVERFLOW_TITLES = ['First Meetup', 'Second Meetup', 'Third Meetup', 'Fourth Meetup', 'Fifth Meetup', 'Sixth Meetup'] as const;

function buildApolloEvent(overrides: Partial<ApolloEvent> = {}) {
    return { ...DEFAULT_EVENT, ...overrides };
}

function buildMeetupHtml(state: Record<string, unknown>) {
    return buildNextDataHtml({ props: { pageProps: { __APOLLO_STATE__: state } } });
}

function buildNextDataHtml(data: unknown) {
    return `<html><body><script id="__NEXT_DATA__" type="application/json">${JSON.stringify(data)}</script></body></html>`;
}

function expectFallback(html: string) {
    expect(html.split('class="events__card').length - 1).toBe(1);
    expect(html).toContain('>No upcoming events.</h3>');
    expect(html).toContain(`href="${MEETUP_URL}"`);
}

async function renderEvents(fetchStub: (input: string) => Promise<Response>) {
    vi.stubGlobal('fetch', fetchStub);

    const container = await AstroContainer.create();

    return container.renderToString(Events);
}

async function renderState(state: Record<string, unknown>) {
    return renderEvents(async () => new Response(buildMeetupHtml(state)));
}

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('Events', () => {
    test('renders cards sorted ascending by start time', async () => {
        const html = await renderState({
            'Event:1': buildApolloEvent({ dateTime: '2026-11-05T18:30:00-06:00', endTime: '2026-11-05T20:30:00-06:00', title: 'November Meetup' }),
            'Event:2': buildApolloEvent({ dateTime: '2026-09-03T18:30:00-05:00', endTime: '2026-09-03T20:30:00-05:00', title: 'September Meetup' }),
            'Event:3': buildApolloEvent({ dateTime: '2026-10-07T18:30:00-05:00', endTime: '2026-10-07T20:30:00-05:00', title: 'October Meetup' }),
        });

        const names = [...html.matchAll(/<h3 class="events__name[^"]*"[^>]*>([^<]*)<\/h3>/g)].map(match => match[1]);

        expect(names).toEqual(['September Meetup', 'October Meetup', 'November Meetup']);
    });

    test('renders exactly five cards when six events are active', async () => {
        const html = await renderState(Object.fromEntries(OVERFLOW_TITLES.map((title, index) => [
            `Event:${index}`,
            buildApolloEvent({
                dateTime: `2026-09-0${index + 1}T18:30:00-05:00`,
                endTime: `2026-09-0${index + 1}T20:30:00-05:00`,
                title,
            }),
        ])));

        expect(html.split('class="events__card').length - 1).toBe(MAX_EVENTS);

        for (const title of OVERFLOW_TITLES.slice(0, MAX_EVENTS)) {
            expect(html, title).toContain(title);
        }

        expect(html).not.toContain(OVERFLOW_TITLES[MAX_EVENTS]);
    });

    for (const [flaw, overrides] of DROPPED_EVENTS) {
        test(`drops an event with ${flaw}`, async () => {
            const html = await renderState({
                'Event:1': buildApolloEvent({ title: 'Kept Meetup' }),
                'Event:2': buildApolloEvent({ title: 'Dropped Meetup', ...overrides }),
            });

            expect(html.split('class="events__card').length - 1).toBe(1);
            expect(html).toContain('Kept Meetup');
            expect(html).not.toContain('Dropped Meetup');
        });
    }

    test('resolves the venue reference into a venue and city location row', async () => {
        const html = await renderState({
            'Event:1': buildApolloEvent({ venue: { __ref: 'Venue:9' } }),
            'Venue:9': { city: 'Austin', name: 'Capital Factory' },
        });

        expect(html).toContain('>Capital Factory, Austin</dd>');
    });

    test('omits the location row when the venue is null', async () => {
        const html = await renderState({ 'Event:1': buildApolloEvent() });

        expect(html).toContain('>Time</span>');
        expect(html).not.toContain('>Location</span>');
    });

    test('renders the single fallback card when the response is not ok', async () => {
        const html = await renderEvents(async () => new Response(null, { status: 500 }));

        expectFallback(html);
    });

    test('renders the fallback card when the next data script is missing', async () => {
        const html = await renderEvents(async () => new Response('<html><body></body></html>'));

        expectFallback(html);
    });

    test('renders the fallback card when the apollo state is missing', async () => {
        const html = await renderEvents(async () => new Response(buildNextDataHtml({ props: { pageProps: {} } })));

        expectFallback(html);
    });

    test('renders the fallback card when the fetch throws', async () => {
        const html = await renderEvents(async () => {
            throw new Error('Offline.');
        });

        expectFallback(html);
    });

    test('requests the meetup events page with a cache-busting timestamp', async () => {
        const requests: string[] = [];

        await renderEvents(async (input) => {
            requests.push(input);

            return new Response(buildMeetupHtml({}));
        });

        expect(requests).toHaveLength(1);
        expect(requests[0].startsWith(`${MEETUP_URL}/events/`)).toBe(true);
        expect(new URL(requests[0]).searchParams.get('t')).toMatch(/^\d+$/);
    });

    test('labels the events section landmark for assistive tech', async () => {
        const html = await renderState({});

        expect(html).toMatch(/<section[^>]*class="events section"[^>]*aria-label="Events"/);
    });

    test('renders the events heading marked for scroll animation', async () => {
        const html = await renderState({});

        expect(html).toMatch(/<h2[^>]*data-scroll[^>]*>\s*Events\s*<\/h2>/);
    });

    test('staggers the event list for scroll animation', async () => {
        const html = await renderState({});

        expect(html).toMatch(/<ul[^>]*data-scroll[^>]*data-scroll-stagger="0\.1"/);
    });
});
