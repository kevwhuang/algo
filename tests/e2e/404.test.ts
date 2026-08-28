import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('404 page', () => {
    test('returns 404 and renders the error section for an unknown path', async ({ page }) => {
        const response = await page.goto('/this-page-does-not-exist');

        expect(response?.status()).toBe(404);

        await expect(page).toHaveTitle('Page Not Found \u2014 Algo');
        await expect(page.locator('#error-not-found-title')).toHaveText('404');
        await expect(page.getByRole('link', { name: 'Return to home' })).toBeVisible();
    });

    test('returns 404 for deep unknown paths', async ({ page }) => {
        const response = await page.goto('/p/nope/deep');

        expect(response?.status()).toBe(404);

        await expect(page.locator('#error-not-found-title')).toHaveText('404');
    });

    test('labels the error section by the heading id', async ({ page }) => {
        await page.goto('/this-page-does-not-exist');

        await expect(page.locator('section[aria-labelledby="error-not-found-title"] h1#error-not-found-title')).toHaveText('404');
    });

    test('marks the page noindex for robots', async ({ page }) => {
        await page.goto('/this-page-does-not-exist');

        await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
    });

    test('navigates home from the return link', async ({ page }) => {
        await page.goto('/this-page-does-not-exist');

        await expect(page.locator('section[aria-labelledby="error-not-found-title"] [data-scroll]')).toHaveAttribute('style', /opacity: 1/);

        await page.getByRole('link', { name: 'Return to home' }).click();

        await expect(page).toHaveURL('/');
        await expect(page).toHaveTitle('Algo');
    });
});
