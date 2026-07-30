import { expect, test } from '@playwright/test';

test.describe('index page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('loads with correct title', async ({ page }) => {
        await expect(page).toHaveTitle('Algo');
    });

    test('navbar renders home link', async ({ page }) => {
        const link = page.locator('a[aria-label="Home"]');

        await expect(link).toHaveAttribute('href', '/');
    });

    test('navbar renders search input', async ({ page }) => {
        const input = page.locator('#search-input');

        await expect(input).toHaveAttribute('aria-label', 'Search problems');
    });

    test('navbar renders external links', async ({ page }) => {
        await expect(page.locator('a[aria-label="Meetup (opens in new tab)"]')).toHaveAttribute('href', 'https://meetup.com/algoatx');
        await expect(page.locator('a[aria-label="LeetCode (opens in new tab)"]')).toHaveAttribute('href', 'https://leetcode.com/u/aephonics');
    });

    test('displays progress heading', async ({ page }) => {
        const heading = page.locator('section[aria-label="Progress"] h2');

        await expect(heading).toHaveText('Progress');
    });

    test('renders all three difficulty bars', async ({ page }) => {
        const bars = page.locator('.progress__bar');

        await expect(bars).toHaveCount(3);
    });

    test('displays events heading', async ({ page }) => {
        const heading = page.locator('section[aria-label="Events"] h2');

        await expect(heading).toHaveText('Events');
    });

    test('footer displays current year', async ({ page }) => {
        const footer = page.locator('footer');
        const year = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year: 'numeric' }).format(new Date());

        await expect(footer).toContainText(year);
        await expect(footer).toContainText('Aephonics');
    });
});
