import { expect, test } from '@playwright/test';
import { join } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import type { Locator, Page } from '@playwright/test';

const CLOCK_MARGIN = 60_000;
const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;
const MIN_SOLUTION_LINES = 3;
const MOBILE_VIEWPORT = { height: 667, width: 375 } as const;
const RESET_DELAY_PATTERN = /COPY_RESET_DELAY = ([\d_]+)/;
const RESTING_LABEL = 'Copy code';
const REVEAL_TIMEOUT = { timeout: 10_000 };
const STATUS_COPIED = 'Code copied to clipboard.';
const STATUS_FAILED = 'Failed to copy code.';

const easyDir = join(process.cwd(), 'src', 'content', 'easy');
const solutionSourcePath = join(process.cwd(), 'src', 'sections', 'Solution.astro');

const copyResetDelay = parseResetDelay(readFileSync(solutionSourcePath, 'utf-8'));
const fixture = getFixture();

const clipboardText = stripTrailingNewline(fixture.code);
const repeatDelay = Math.floor(copyResetDelay / 2);
const solutionPath = `/p/${fixture.id}`;

function createFadeObserver(button: Locator) {
    return button.evaluate((element) => {
        const observer = new MutationObserver(() => {
            if (element.classList.contains('solution__copy--fading')) (window as Window & { fadeObserved?: boolean }).fadeObserved = true;
        });

        observer.observe(element, { attributeFilter: ['class'], attributes: true });
    });
}

function expectRevealed(page: Page) {
    return expect(page.locator('section[data-scroll]')).toHaveCSS('opacity', '1', REVEAL_TIMEOUT);
}

function getClipboardText(page: Page) {
    return page.evaluate(() => window.navigator.clipboard.readText());
}

function getFadeObserved(page: Page) {
    return page.evaluate(() => (window as Window & { fadeObserved?: boolean }).fadeObserved === true);
}

function getFixture() {
    for (const subdirectory of readdirSync(easyDir).sort()) {
        const subdirectoryPath = join(easyDir, subdirectory);

        if (!statSync(subdirectoryPath).isDirectory() || subdirectory === 'front-end') continue;

        for (const file of readdirSync(subdirectoryPath).sort()) {
            const code = readFileSync(join(subdirectoryPath, file), 'utf-8');
            const header = code.match(HEADER_PATTERN);

            if (code.trim().split('\n').length < MIN_SOLUTION_LINES || !header) continue;

            return { code, id: header[2] };
        }
    }

    throw new Error('No solved easy problem found.');
}

async function gotoHydrated(page: Page, path: string) {
    await gotoLoaded(page, path);
    await expectRevealed(page);
}

async function gotoLoaded(page: Page, path: string) {
    const indexResponse = page.waitForResponse('**/api/search.json');

    await page.goto(path);
    await indexResponse;
}

function parseResetDelay(source: string) {
    const match = source.match(RESET_DELAY_PATTERN);

    if (!match) throw new Error('Missing COPY_RESET_DELAY in Solution.astro.');

    return Number(match[1].replace(/_/g, ''));
}

function pauseClock(page: Page) {
    return page.clock.pauseAt(Date.now() + CLOCK_MARGIN);
}

function resetFadeObserver(page: Page) {
    return page.evaluate(() => {
        (window as Window & { fadeObserved?: boolean }).fadeObserved = false;
    });
}

function stripTrailingNewline(code: string) {
    return code.replace(/\n$/, '');
}

test.use({ permissions: ['clipboard-read', 'clipboard-write'] });

test.describe('copy button', () => {
    test.beforeEach(async ({ page }) => {
        await page.clock.install();
        await gotoHydrated(page, solutionPath);
    });

    test('copies the full solution code to the clipboard', async ({ page }) => {
        const label = page.locator('.solution__label');

        await page.locator('.solution__copy').click();

        await expect(label).toHaveText('Copied');

        expect(await getClipboardText(page)).toBe(clipboardText);
    });

    test('fades the label through the fading class into copied with a polite announcement', async ({ page }) => {
        const button = page.locator('.solution__copy');
        const label = page.locator('.solution__label');
        const status = page.locator('.solution__status');

        await expect(button).toHaveAttribute('aria-label', RESTING_LABEL);
        await expect(label).toHaveText('Copy');
        await expect(status).toHaveText('');

        await createFadeObserver(button);
        await pauseClock(page);
        await button.click();

        await expect(label).toHaveText('Copied');
        await expect(button).toHaveAttribute('aria-label', STATUS_COPIED);
        await expect(button).not.toHaveClass(/solution__copy--fading/);
        await expect(status).toHaveText(STATUS_COPIED);

        expect(await getFadeObserved(page)).toBe(true);
    });

    test('holds the copied label until the reset delay elapses and then restores copy', async ({ page }) => {
        const button = page.locator('.solution__copy');
        const label = page.locator('.solution__label');
        const status = page.locator('.solution__status');

        await pauseClock(page);
        await button.click();

        await expect(label).toHaveText('Copied');
        await expect(button).not.toHaveClass(/solution__copy--fading/);

        await page.clock.fastForward(copyResetDelay - 1);

        await expect(label).toHaveText('Copied');
        await expect(button).not.toHaveClass(/solution__copy--fading/);
        await expect(status).toHaveText(STATUS_COPIED);

        await page.clock.fastForward(1);

        await expect(label).toHaveText('Copy');
        await expect(button).toHaveAttribute('aria-label', RESTING_LABEL);
        await expect(status).toHaveText('');
    });

    test('restarts the reset window when a second copy lands inside it', async ({ page }) => {
        const button = page.locator('.solution__copy');
        const label = page.locator('.solution__label');

        await createFadeObserver(button);
        await pauseClock(page);
        await button.click();

        await expect(label).toHaveText('Copied');
        await expect(button).not.toHaveClass(/solution__copy--fading/);

        await page.clock.fastForward(repeatDelay);
        await resetFadeObserver(page);
        await button.click();

        await expect.poll(() => getFadeObserved(page)).toBe(true);
        await expect(label).toHaveText('Copied');
        await expect(button).not.toHaveClass(/solution__copy--fading/);

        await page.clock.fastForward(copyResetDelay - 1);

        await expect(label).toHaveText('Copied');

        await page.clock.fastForward(1);

        await expect(label).toHaveText('Copy');
        await expect(button).toHaveAttribute('aria-label', RESTING_LABEL);
    });
});

test.describe('copy button after client router navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.clock.install();
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await gotoLoaded(page, '/');
    });

    test('copies to the clipboard on a solution page reached through a search result', async ({ page }) => {
        const button = page.locator('.solution__copy');
        const label = page.locator('.solution__label');
        const result = page.locator(`.navbar__result[href="${solutionPath}"]`);
        const status = page.locator('.solution__status');

        await page.getByRole('combobox').fill(fixture.id);
        await result.click();

        await expect(page).toHaveURL(solutionPath);
        await expectRevealed(page);

        await pauseClock(page);
        await button.click();

        await expect(label).toHaveText('Copied');
        await expect(button).toHaveAttribute('aria-label', STATUS_COPIED);
        await expect(status).toHaveText(STATUS_COPIED);

        expect(await getClipboardText(page)).toBe(clipboardText);
    });
});

test.describe('copy button on a mobile viewport', () => {
    test.use({ viewport: MOBILE_VIEWPORT });

    test.beforeEach(async ({ page }) => {
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await gotoHydrated(page, solutionPath);
    });

    test('hides the copy button while the language badge stays visible', async ({ page }) => {
        const button = page.locator('.solution__copy');

        await expect(page.locator('section[data-scroll] dd').first()).toBeVisible();
        await expect(button).toBeHidden();
        await expect(button).toHaveCSS('display', 'none');
    });
});

test.describe('copy button under reduced motion', () => {
    test.beforeEach(async ({ page }) => {
        await page.clock.install();
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await gotoHydrated(page, solutionPath);
    });

    test('resolves the transition-driven label swap and reset', async ({ page }) => {
        const button = page.locator('.solution__copy');
        const label = page.locator('.solution__label');
        const status = page.locator('.solution__status');

        await pauseClock(page);
        await button.click();

        await expect(label).toHaveText('Copied');
        await expect(button).toHaveAttribute('aria-label', STATUS_COPIED);
        await expect(status).toHaveText(STATUS_COPIED);

        expect(await getClipboardText(page)).toBe(clipboardText);

        await page.clock.fastForward(copyResetDelay);

        await expect(label).toHaveText('Copy');
        await expect(button).toHaveAttribute('aria-label', RESTING_LABEL);
        await expect(status).toHaveText('');
    });
});

test.describe('copy button when the clipboard write fails', () => {
    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            window.navigator.clipboard.writeText = () => Promise.reject(new Error('Copy blocked.'));
        });

        await page.clock.install();
        await gotoHydrated(page, solutionPath);
    });

    test('fades the label to failed with a polite announcement and restores copy after the reset delay', async ({ page }) => {
        const button = page.locator('.solution__copy');
        const label = page.locator('.solution__label');
        const status = page.locator('.solution__status');

        await createFadeObserver(button);
        await pauseClock(page);
        await button.click();

        await expect(label).toHaveText('Failed');
        await expect(button).toHaveAttribute('aria-label', STATUS_FAILED);
        await expect(button).not.toHaveClass(/solution__copy--fading/);
        await expect(status).toHaveText(STATUS_FAILED);

        expect(await getFadeObserved(page)).toBe(true);

        await page.clock.fastForward(copyResetDelay - 1);

        await expect(label).toHaveText('Failed');
        await expect(status).toHaveText(STATUS_FAILED);

        await page.clock.fastForward(1);

        await expect(label).toHaveText('Copy');
        await expect(button).toHaveAttribute('aria-label', RESTING_LABEL);
        await expect(status).toHaveText('');
    });
});

test.describe('content mirror', () => {
    test('pins the header, reset delay, and trailing newline mirrors to literal fixtures', () => {
        expect('// 1. Two Sum'.match(HEADER_PATTERN)?.[2]).toBe('1');
        expect(parseResetDelay('const COPY_RESET_DELAY = 2_000;')).toBe(2_000);
        expect(stripTrailingNewline('const value = 1;\n')).toBe('const value = 1;');
    });
});
