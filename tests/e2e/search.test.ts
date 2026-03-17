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

    test('/ toggles search focus on and off', async ({ page }) => {
        const input = page.locator('#search-input');

        await page.keyboard.press('/');
        await expect(input).toBeFocused();

        await page.keyboard.press('/');
        await expect(input).not.toBeFocused();
    });

    test('first result is highlighted by default', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await expect(results.locator('[aria-selected="true"]')).toHaveCount(1);
        await expect(results.locator('#search-result-0')).toHaveAttribute('aria-selected', 'true');
    });

    test('arrow down moves highlight to next result', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await expect(results.locator('#search-result-0')).toHaveAttribute('aria-selected', 'true');

        await page.keyboard.press('ArrowDown');
        await expect(results.locator('#search-result-1')).toHaveAttribute('aria-selected', 'true');
        await expect(results.locator('[aria-selected="true"]')).toHaveCount(1);
    });

    test('arrow up wraps to last result', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await expect(results.locator('#search-result-0')).toHaveAttribute('aria-selected', 'true');

        await page.keyboard.press('ArrowUp');
        const items = results.locator('.navbar__result');
        const count = await items.count();
        await expect(results.locator(`#search-result-${count - 1}`)).toHaveAttribute('aria-selected', 'true');
    });

    test('enter navigates to highlighted result', async ({ page }) => {
        const input = page.locator('#search-input');

        await input.fill('two sum');
        await page.keyboard.press('Enter');

        await expect(page).toHaveTitle(/\| Algo/);
    });

    test('sets aria-expanded and aria-activedescendant', async ({ page }) => {
        const input = page.locator('#search-input');

        await input.fill('two sum');
        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');
    });

    test('clicking a result navigates to solution', async ({ page }) => {
        const input = page.locator('#search-input');
        const results = page.locator('#search-results');

        await input.fill('two sum');
        await results.locator('a').first().click();

        await expect(page).toHaveTitle(/\| Algo/);
    });
});
