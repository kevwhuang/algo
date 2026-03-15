import { expect, test } from '@playwright/test';

test.describe('solution page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/1');
    });

    test('loads with correct title format', async ({ page }) => {
        await expect(page).toHaveTitle(/1\. Two Sum \| Algo/);
    });

    test('displays solution heading', async ({ page }) => {
        const h1 = page.locator('#solution-heading');
        await expect(h1).toContainText('1. Two Sum');
    });

    test('renders language badge', async ({ page }) => {
        const badge = page.locator('.solution__code span').first();
        await expect(badge).toBeVisible();
    });

    test('renders difficulty badge', async ({ page }) => {
        const badges = page.locator('.solution__code .flex-wrap span');
        await expect(badges).toHaveCount(2);
    });

    test('renders code block', async ({ page }) => {
        const code = page.locator('.solution__highlight');
        await expect(code).toBeVisible();
    });

    test('renders copy button', async ({ page }) => {
        const button = page.locator('button[aria-label="Copy code"]');
        await expect(button).toHaveText('Copy');
    });

    test('code block has accessible pre element', async ({ page }) => {
        const pre = page.locator('pre.sr-only');
        await expect(pre).toBeAttached();
    });

    test('renders source code region with aria-label', async ({ page }) => {
        const region = page.locator('[role="region"][aria-label="1. Two Sum source code"]');
        await expect(region).toBeAttached();
    });
});
