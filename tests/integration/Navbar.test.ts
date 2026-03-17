import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import Navbar from '../../src/sections/Navbar.astro';

describe('Navbar', () => {
    test('renders home link', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('aria-label="Home"');
        expect(html).toContain('href="/"');
    });

    test('renders search input', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('id="search-input"');
        expect(html).toContain('aria-label="Search problems"');
    });

    test('renders search input with combobox role', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('role="combobox"');
        expect(html).toContain('aria-autocomplete="list"');
        expect(html).toContain('aria-controls="search-results"');
        expect(html).toContain('aria-expanded="false"');
    });

    test('renders search results container', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('id="search-results"');
    });

    test('renders search results with listbox role', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('role="listbox"');
    });

    test('renders Meetup link', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('href="https://meetup.com/algoatx"');
        expect(html).toContain('aria-label="Meetup (opens in new tab)"');
    });

    test('renders LeetCode link', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('href="https://leetcode.com/u/aephonics"');
        expect(html).toContain('aria-label="LeetCode (opens in new tab)"');
    });

    test('external links open in new tab', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);
        const externalLinks = html.match(/target="_blank"/g);

        expect(externalLinks?.length).toBe(2);
    });

    test('renders keyboard shortcut hint', async () => {
        const container = await AstroContainer.create();
        const html = await container.renderToString(Navbar);

        expect(html).toContain('<kbd');
        expect(html).toContain('/</kbd>');
    });
});
