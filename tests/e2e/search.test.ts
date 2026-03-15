import { expect, test } from '@playwright/test';

test.describe('search', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('/ shortcut focuses search input', async ({ page }) => {
        await page.keyboard.press('/');
        await expect(page.locator('#search-input')).toBeFocused();
    });

    test('typing shows search results', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await expect(results).toHaveClass(/opacity-100/);
        await expect(results.locator('a').first()).toBeVisible();
    });

    test('displays no results for nonsense query', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('zzzznotaproblemnamexxxx');
        await expect(results).toContainText('No results');
    });

    test('escape closes results and clears input', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await expect(results).toHaveClass(/opacity-100/);

        await page.keyboard.press('Escape');
        await expect(results).toHaveClass(/opacity-0/);
        await expect(input).toHaveValue('');
    });

    test('clicking a result navigates to solution', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await results.locator('a').first().click();

        await expect(page).toHaveTitle(/\| Algo/);
    });
});
