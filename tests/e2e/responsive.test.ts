import { expect, test } from '@playwright/test';
import { join } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import { DIFFICULTIES } from '../../src/lib/constants';

import type { Page } from '@playwright/test';

const BREAKPOINT = 768;
const CONTENT_DIR = 'src/content';
const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;
const SCRIPT_TIMEOUT = 20_000;
const VIEWPORT_HEIGHT = 800;
const WIDTHS = [320, 375, 767, 768, 769, 1_023, 1_024, 1_025, 1_280, 1_440] as const;

const longestTitleProblemId = getLongestTitleProblemId();

const pages = [
    { hasCopy: false, name: 'home', path: '/' },
    { hasCopy: true, name: 'solution', path: `/p/${longestTitleProblemId}` },
    { hasCopy: false, name: 'not found', path: '/nonexistent-404' },
    { hasCopy: false, name: 'server error', path: '/500' },
] as const;

function countHiddenScrollElements(page: Page) {
    return page.evaluate(() => [...document.querySelectorAll('[data-scroll]')].filter((element) => {
        const style = getComputedStyle(element);

        return style.opacity === '0' || style.visibility === 'hidden';
    }).length);
}

function getBadgeDisplay(page: Page) {
    return page.evaluate(() => {
        const badge = document.querySelector('.navbar__badge');

        return badge ? getComputedStyle(badge).display : 'missing';
    });
}

function getLongestTitleProblemId() {
    let longestId = '';
    let longestLength = 0;

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(process.cwd(), CONTENT_DIR, difficulty);

        for (const subdirectory of readdirSync(difficultyDir)) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (!statSync(subdirectoryPath).isDirectory()) continue;

            for (const file of readdirSync(subdirectoryPath)) {
                const header = readFileSync(join(subdirectoryPath, file), 'utf-8').match(HEADER_PATTERN);

                if (!header) continue;

                const titleLength = `${header[2]}. ${header[3]}`.length;

                if (titleLength <= longestLength) continue;

                longestId = header[2];
                longestLength = titleLength;
            }
        }
    }

    return longestId;
}

function getViewportMetrics(page: Page) {
    return page.evaluate(() => ({
        bodyScrollWidth: document.body.scrollWidth,
        documentScrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
    }));
}

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('responsive layout', () => {
    for (const entry of pages) {
        test(`${entry.name} page fits every width and toggles compact controls at the breakpoint`, async ({ page }) => {
            await page.setViewportSize({ height: VIEWPORT_HEIGHT, width: WIDTHS[0] });
            await page.goto(entry.path);
            await page.locator('main').waitFor();
            await expect(page.locator('.navbar__badge').first()).toBeAttached();

            for (const width of WIDTHS) {
                await page.setViewportSize({ height: VIEWPORT_HEIGHT, width });

                const metrics = await getViewportMetrics(page);

                expect(metrics.bodyScrollWidth, `body horizontal overflow at width ${width}`).toBeLessThanOrEqual(metrics.innerWidth);
                expect(metrics.documentScrollWidth, `document horizontal overflow at width ${width}`).toBeLessThanOrEqual(metrics.innerWidth);

                await expect
                    .poll(() => countHiddenScrollElements(page), {
                        message: `hidden [data-scroll] content at width ${width}`,
                        timeout: SCRIPT_TIMEOUT,
                    })
                    .toBe(0);

                await expect(page.locator('main'), `main content hidden at width ${width}`).toBeVisible();
                await expect(page.locator('.navbar__input'), `search input hidden at width ${width}`).toBeVisible();

                const badgeDisplay = await getBadgeDisplay(page);

                const hint = page.locator('.navbar__hint');

                if (width <= BREAKPOINT) {
                    await expect(hint, `kbd hint visible at width ${width}`).toBeHidden();

                    expect(badgeDisplay, `result badge shown at width ${width}`).toBe('none');
                } else {
                    await expect(hint, `kbd hint hidden at width ${width}`).toBeVisible();

                    expect(badgeDisplay, `result badge hidden at width ${width}`).not.toBe('none');
                }

                if (!entry.hasCopy) continue;

                const copyButton = page.locator('.solution__copy');

                if (width <= BREAKPOINT) await expect(copyButton, `copy button visible at width ${width}`).toBeHidden();
                else await expect(copyButton, `copy button hidden at width ${width}`).toBeVisible();
            }
        });
    }
});

test.describe('content mirror', () => {
    test('pins the header title mirror to a literal fixture', () => {
        const header = '// 1. Two Sum'.match(HEADER_PATTERN);

        expect(`${header?.[2]}. ${header?.[3]}`).toBe('1. Two Sum');
    });
});
