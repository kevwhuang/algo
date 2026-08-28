import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import Navbar from '../../src/sections/Navbar.astro';
import { MEETUP_URL, ROUTES } from '../../src/lib/constants';

const ICON_CLASSES = [
    'size-(--size-icon) text-cyan',
    'absolute left-4 top-1/2 size-5 text-zinc-400 -translate-y-1/2 pointer-events-none',
    'size-(--size-icon) text-meetup',
    'size-(--size-icon) text-leetcode',
];

const MAX_RESULTS = 20;

const RESULT_SLOTS = Array.from({ length: MAX_RESULTS }, (_, index) => index);

describe('Navbar', () => {
    let html: string;
    let resultLinks: string[];

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(Navbar);

        resultLinks = html.match(/<a id="search-result-\d+"[^>]*>/g) ?? [];
    });

    test('renders the fixed header shell', () => {
        expect(html).toContain('<header class="navbar fixed top-0 z-50 h-(--header-height) w-full border-b border-white-10 bg-zinc-950"');
    });

    test('labels the main nav for assistive tech', () => {
        expect(html).toMatch(/<nav class="navbar__inner shell [^"]*" aria-label="Main"/);
    });

    test('links the logo home with the home route label', () => {
        expect(html).toMatch(new RegExp(`<a class="navbar__link [^"]*" aria-label="${ROUTES[0].label}" href="${ROUTES[0].href}"`));
    });

    test('wraps the search field in a search landmark', () => {
        expect(html).toContain('<search class="navbar__search flex-1 relative max-w-xl"');
    });

    test('labels the search input with visually hidden text', () => {
        expect(html).toMatch(/<label class="contents"[^>]*><span class="sr-only"[^>]*>Search solutions<\/span>/);
    });

    test('renders the search input as a closed combobox controlling the results listbox', () => {
        expect(html).toMatch(/<input class="navbar__input [^"]*" aria-autocomplete="list" aria-controls="search-results" aria-expanded="false"/);
        expect(html).toContain('autocomplete="off" placeholder="Search&hellip;" role="combobox" type="text"');
    });

    test('hides the slash shortcut hint from assistive tech', () => {
        expect(html).toMatch(/<kbd class="navbar__hint [^"]*" aria-hidden="true"[^>]*>\/<\/kbd>/);
    });

    test('renders the results listbox labelled and removed from the tab order', () => {
        expect(html).toMatch(/<div id="search-results" class="navbar__results [^"]*" aria-label="Search results" role="listbox" tabindex="-1"/);
    });

    test('renders twenty result slots with sequential ids and empty title and badge spans', () => {
        const ids = [...html.matchAll(/id="search-result-(\d+)"/g)].map(match => Number(match[1]));

        expect(html.split('class="navbar__result ').length - 1).toBe(MAX_RESULTS);
        expect(html.split('class="navbar__result-title truncate"').length - 1).toBe(MAX_RESULTS);
        expect(html.split('class="navbar__badge ').length - 1).toBe(MAX_RESULTS);
        expect(html.match(/<span class="navbar__result-title truncate"[^>]*><\/span>/g)).toHaveLength(MAX_RESULTS);
        expect(html.match(/<span class="navbar__badge [^"]*"[^>]*><\/span>/g)).toHaveLength(MAX_RESULTS);
        expect(ids).toEqual(RESULT_SLOTS);
    });

    test('hides every result slot unselected and out of the tab order', () => {
        expect(resultLinks).toHaveLength(MAX_RESULTS);

        resultLinks.forEach((link, index) => {
            expect(link, `search-result-${index}`).toContain('aria-selected="false" hidden href="/" role="option" tabindex="-1"');
        });
    });

    test('renders the empty message as a disabled hidden option', () => {
        expect(html).toMatch(/<div id="search-message"[^>]*aria-disabled="true" aria-selected="false" hidden role="option"[^>]*>No results\.<\/div>/);
    });

    test('opens both external links in new tabs with new-tab labels', () => {
        expect(html).toContain(`aria-label="Meetup (opens in new tab)" href="${MEETUP_URL}" target="_blank"`);
        expect(html).toContain('aria-label="LeetCode (opens in new tab)" href="https://leetcode.com/u/aephonics" target="_blank"');
    });

    test('renders four decorative icons with distinguishing classes in document order', () => {
        const offsets = ICON_CLASSES.map(iconClass => html.indexOf(`<svg class="${iconClass}" aria-hidden="true"`));

        expect(html.split('<svg').length - 1).toBe(ICON_CLASSES.length);

        offsets.forEach((offset, index) => expect(offset, ICON_CLASSES[index]).toBeGreaterThan(index > 0 ? offsets[index - 1] : -1));
    });

    test('attaches exactly one search script hook', () => {
        expect(html.split('Navbar.astro?astro&type=script').length - 1).toBe(1);
    });
});
