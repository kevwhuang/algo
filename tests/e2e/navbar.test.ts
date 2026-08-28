import { expect, test } from '@playwright/test';
import { join, parse } from 'node:path';
import { readdirSync } from 'node:fs';

import { MEETUP_URL, ROUTES } from '../../src/lib/constants';

import type { Page } from '@playwright/test';

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const LEETCODE_HREF = 'https://leetcode.com/u/aephonics';
const SCROLL_DISTANCE = 600;
const SCROLL_POLL = { timeout: 5_000 };

const dataStructuresDir = join(process.cwd(), 'src', 'content', 'data-structures');
const solutionPath = `/p/${getFirstDataStructureSlug()}`;

const pages = [
    { name: 'home', path: '/' },
    { name: 'solution', path: solutionPath },
    { name: 'not found', path: '/this-page-does-not-exist' },
];

function getFirstDataStructureSlug() {
    const [first] = readdirSync(dataStructuresDir).sort();

    return toKebabCase(parse(first).name);
}

function getScrollY(page: Page) {
    return page.evaluate(() => window.scrollY);
}

async function gotoHydrated(page: Page, path: string) {
    const indexResponse = page.waitForResponse('**/api/search.json');

    await page.goto(path);
    await indexResponse;
}

function toKebabCase(name: string) {
    return name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase();
}

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('navbar chrome', () => {
    for (const { name, path } of pages) {
        test(`renders the header fixed to the top of the ${name} page`, async ({ page }) => {
            await page.goto(path);

            const header = page.locator('header.navbar');

            await expect(header).toBeVisible();
            await expect(header).toHaveCSS('position', 'fixed');

            expect((await header.boundingBox())?.y).toBe(0);
        });
    }

    test('keeps the header pinned to the top while the page scrolls', async ({ page }) => {
        await gotoHydrated(page, '/');

        const header = page.locator('header.navbar');

        const restingBox = await header.boundingBox();

        await page.mouse.wheel(0, SCROLL_DISTANCE);

        await expect.poll(() => getScrollY(page), SCROLL_POLL).toBeGreaterThan(0);

        expect(await header.boundingBox()).toEqual(restingBox);
    });
});

test.describe('navbar links', () => {
    test('navigates home from the logo link', async ({ page }) => {
        await gotoHydrated(page, solutionPath);

        const logo = page.locator(`.navbar__link[href="${ROUTES[0].href}"]`);

        await expect(logo).toHaveAttribute('aria-label', ROUTES[0].label);

        await logo.click();

        await expect(page).toHaveURL('/');
        await expect(page.getByRole('heading', { name: 'Progress' })).toBeVisible();
    });

    test('points the meetup and leetcode links at external profiles opening in a new tab', async ({ page }) => {
        await page.goto('/');

        const leetcode = page.locator(`.navbar__link[href="${LEETCODE_HREF}"]`);
        const meetup = page.locator(`.navbar__link[href="${MEETUP_URL}"]`);

        await expect(leetcode).toBeVisible();
        await expect(leetcode).toHaveAttribute('aria-label', 'LeetCode (opens in new tab)');
        await expect(leetcode).toHaveAttribute('target', '_blank');
        await expect(meetup).toBeVisible();
        await expect(meetup).toHaveAttribute('aria-label', 'Meetup (opens in new tab)');
        await expect(meetup).toHaveAttribute('target', '_blank');
    });

    test('dims the logo and meetup links on keyboard focus from their resting opacity', async ({ page }) => {
        await gotoHydrated(page, '/');

        const logo = page.locator(`.navbar__link[href="${ROUTES[0].href}"]`);
        const meetup = page.locator(`.navbar__link[href="${MEETUP_URL}"]`);

        await expect(logo).toHaveCSS('opacity', '1');
        await expect(meetup).toHaveCSS('opacity', '1');

        await page.keyboard.press('Tab');

        await expect(logo).toBeFocused();
        await expect(logo).toHaveCSS('opacity', '0.8');
        await expect(meetup).toHaveCSS('opacity', '1');

        await page.keyboard.press('Tab');

        await expect(page.getByRole('combobox')).toBeFocused();

        await page.keyboard.press('Tab');

        await expect(meetup).toBeFocused();
        await expect(logo).toHaveCSS('opacity', '1');
        await expect(meetup).toHaveCSS('opacity', '0.8');
    });
});

test.describe('content mirror', () => {
    test('pins the kebab-case slug mirror to a literal fixture', () => {
        expect(toKebabCase('BinaryHeap')).toBe('binary-heap');
    });
});
