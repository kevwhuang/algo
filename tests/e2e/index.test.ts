import { expect, test } from '@playwright/test';
import { join } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import astroConfig from '../../astro.config';
import { DIFFICULTIES, MEETUP_URL, ROUTES } from '../../src/lib/constants';

interface StructuredData {
    '@context': string;
    '@graph': {
        '@type': string;
        'itemListElement'?: unknown[];
        'name'?: string;
        'url'?: string;
    }[];
}

const CONTENT_DIR = 'src/content';
const DESCRIPTION_MAX = 160;
const DESCRIPTION_MIN = 120;
const MIN_SOLUTION_LINES = 3;
const PERCENT = 100;

const contentRoot = join(process.cwd(), CONTENT_DIR);
const stats = DIFFICULTIES.map(getDifficultyStats);

function getDifficultyStats(difficulty: (typeof DIFFICULTIES)[number]) {
    const difficultyDir = join(contentRoot, difficulty);

    let completed = 0;
    let total = 0;

    for (const subdirectory of readdirSync(difficultyDir)) {
        if (subdirectory === 'front-end') continue;

        const subdirectoryPath = join(difficultyDir, subdirectory);

        if (!statSync(subdirectoryPath).isDirectory()) continue;

        for (const file of readdirSync(subdirectoryPath)) {
            total++;

            if (isSolved(readFileSync(join(subdirectoryPath, file), 'utf-8'))) completed++;
        }
    }

    return { completed, difficulty, percent: total > 0 ? Math.round((completed / total) * PERCENT) : 0, total };
}

function isSolved(code: string) {
    return code.trim().split('\n').length >= MIN_SOLUTION_LINES;
}

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('index page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('loads with the bare algo title', async ({ page }) => {
        await expect(page).toHaveTitle('Algo');
    });

    test('renders the progress heading and three difficulty rows with derived counts', async ({ page }) => {
        expect(isSolved('// 1. Alpha\n\nexport default null;')).toBe(true);

        const rows = page.locator('.progress li');

        await expect(page.locator('.progress h2')).toHaveText('Progress');
        await expect(rows).toHaveCount(DIFFICULTIES.length);

        for (const [index, { completed, difficulty, total }] of stats.entries()) {
            const row = rows.nth(index);

            await expect(row.locator('dt'), difficulty).toHaveText(difficulty);
            await expect(row.locator('dd'), difficulty).toHaveText(`${completed}/${total}`);
        }
    });

    test('exposes progressbar aria values matching the derived counts', async ({ page }) => {
        const rows = page.locator('.progress li');

        for (const [index, { completed, difficulty, percent, total }] of stats.entries()) {
            const bar = rows.nth(index).getByRole('progressbar');

            await expect(bar, difficulty).toHaveAttribute('aria-label', `${difficulty} progress`);
            await expect(bar, difficulty).toHaveAttribute('aria-valuemax', String(total));
            await expect(bar, difficulty).toHaveAttribute('aria-valuemin', '0');
            await expect(bar, difficulty).toHaveAttribute('aria-valuenow', String(completed));
            await expect(bar.locator('.progress__bar'), difficulty).toHaveAttribute('data-progress', String(percent));
        }
    });

    test('shows the events heading with at least one meetup card', async ({ page }) => {
        const firstCard = page.locator('.events__card').first();

        await expect(page.locator('.events h2')).toHaveText('Events');
        await expect(firstCard).toBeVisible();
        await expect(firstCard).toHaveAttribute('aria-label', /\(opens in new tab\)$/);
        await expect(firstCard).toHaveAttribute('href', new RegExp(`^${MEETUP_URL}`));
        await expect(firstCard).toHaveAttribute('target', '_blank');
        await expect(firstCard.locator('.events__day')).not.toBeEmpty();
        await expect(firstCard.locator('.events__name')).not.toBeEmpty();
    });

    test('stamps the footer with the current central-time year', async ({ page }) => {
        const year = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year: 'numeric' }).format(new Date());

        await expect(page.locator('footer time')).toHaveAttribute('datetime', year);
        await expect(page.locator('footer time')).toHaveText(year);
    });

    test('exposes a meta description of the expected length', async ({ page }) => {
        const description = await page.locator('meta[name="description"]').getAttribute('content');

        expect(description).not.toBeNull();
        expect(String(description).length).toBeGreaterThanOrEqual(DESCRIPTION_MIN);
        expect(String(description).length).toBeLessThanOrEqual(DESCRIPTION_MAX);
    });

    test('embeds parseable json-ld website data', async ({ page }) => {
        const raw = await page.locator('script[type="application/ld+json"]').textContent();

        const data = JSON.parse(String(raw)) as StructuredData;

        const itemList = data['@graph'].find(node => node['@type'] === 'ItemList');
        const website = data['@graph'].find(node => node['@type'] === 'WebSite');

        expect(data['@context']).toBe('https://schema.org');
        expect(itemList?.itemListElement).toHaveLength(ROUTES.length);
        expect(website?.name).toBe('Algo');
        expect(website?.url).toContain(new URL(String(astroConfig.site)).host);
    });

    test('fits the default viewport without horizontal overflow', async ({ page }) => {
        const metrics = await page.evaluate(() => ({
            clientWidth: document.documentElement.clientWidth,
            scrollWidth: document.documentElement.scrollWidth,
        }));

        expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
    });

    test('loads without console errors', async ({ page }) => {
        const errors: string[] = [];

        page.on('console', (message) => {
            if (message.type() === 'error') errors.push(message.text());
        });

        await page.goto('/');
        await page.waitForLoadState('networkidle');

        expect(errors).toEqual([]);
    });
});
