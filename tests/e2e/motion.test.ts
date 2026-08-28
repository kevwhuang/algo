import { expect, test } from '@playwright/test';
import { join } from 'node:path';
import { readdirSync } from 'node:fs';

import { DIFFICULTIES } from '../../src/lib/constants';

import type { Locator, Page } from '@playwright/test';

const HIDDEN_TRANSFORM = 'matrix(1, 0, 0, 1, 0, 60)';
const POLL = { timeout: 10_000 };
const POLL_TIGHT = { intervals: [100], timeout: 10_000 };
const SETTLED_TRANSFORM = 'matrix(1, 0, 0, 1, 0, 0)';

const contentRoot = join(import.meta.dirname, '..', '..', 'src', 'content');
const problemId = getLowestProblemId();

function areAllRevealed(page: Page, selector: string) {
    return page.locator(selector).evaluateAll(
        elements => elements.every(element => getComputedStyle(element).opacity === '1'),
    );
}

function areBarsMidFlight(page: Page) {
    return page.locator('.progress__bar').evaluateAll(elements => elements.every((element) => {
        if (!(element instanceof HTMLElement)) return false;

        const target = Number(element.dataset.progress);
        const width = Number.parseFloat(element.style.width);

        return element.style.width.endsWith('%') && width > 0 && width < target;
    }));
}

function areBarsSettled(page: Page) {
    return page.locator('.progress__bar').evaluateAll(elements => elements.every(
        element => element instanceof HTMLElement && element.style.width === `${element.dataset.progress}%`,
    ));
}

function areInlinePropsCleared(page: Page, selector: string) {
    return page.locator(selector).evaluateAll(elements => elements.every(
        element => element instanceof HTMLElement && element.style.opacity === '' && element.style.transform === '',
    ));
}

function areInlineShown(page: Page) {
    return page.locator('[data-scroll]').evaluateAll(elements => elements.every(
        element => element instanceof HTMLElement && element.style.opacity === '1',
    ));
}

function areRevealed(page: Page) {
    return page.locator('[data-scroll], [data-scroll-stagger] > *').evaluateAll(
        elements => elements.every((element) => {
            const style = getComputedStyle(element);

            return style.opacity === '1' && style.transform === 'none';
        }),
    );
}

function getLowestProblemId() {
    const ids: number[] = [];

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(contentRoot, difficulty);

        for (const rangeDir of readdirSync(difficultyDir, { withFileTypes: true })) {
            if (!rangeDir.isDirectory() || rangeDir.name === 'front-end') continue;

            for (const file of readdirSync(join(difficultyDir, rangeDir.name))) {
                const id = Number.parseInt(file, 10);

                if (Number.isInteger(id)) ids.push(id);
            }
        }
    }

    return Math.min(...ids);
}

function getOpacities(page: Page, selector: string) {
    return page.locator(selector).evaluateAll(
        elements => elements.map(element => Number.parseFloat(getComputedStyle(element).opacity)),
    );
}

function getOpacity(locator: Locator) {
    return locator.evaluate(element => getComputedStyle(element).opacity);
}

function getTransform(locator: Locator) {
    return locator.evaluate(element => getComputedStyle(element).transform);
}

function scrollToCenter(locator: Locator) {
    return locator.evaluate((element) => {
        element.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
}

test.describe('scroll motion', () => {
    test('keeps the below-fold events heading hidden until it is scrolled into view', async ({ page }) => {
        await page.goto('/');

        const heading = page.locator('.events h2');

        await expect.poll(() => getOpacity(page.locator('.progress h2')), POLL).toBe('1');
        await expect.poll(() => getTransform(heading), POLL).toBe(HIDDEN_TRANSFORM);

        expect(await getOpacity(heading)).toBe('0');

        await scrollToCenter(heading);

        await expect.poll(() => getOpacity(heading), POLL).toBe('1');
        await expect.poll(() => getTransform(heading), POLL).toBe(SETTLED_TRANSFORM);
    });

    test('animates the progress bars from zero toward their data-progress widths after load', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });

        const bars = page.locator('.progress__bar');

        await expect(bars).toHaveCount(DIFFICULTIES.length);

        const targets = await bars.evaluateAll(elements => elements.map(element => Number(element.getAttribute('data-progress'))));

        for (const [index, target] of targets.entries()) {
            expect(target, `bar ${index}`).toBeGreaterThan(0);
        }

        await expect.poll(() => areBarsMidFlight(page), POLL_TIGHT).toBe(true);
        await expect.poll(() => areBarsSettled(page), POLL).toBe(true);
    });

    test('staggers the three progress rows so each row leads the next while animating in', async ({ page }) => {
        await page.goto('/', { waitUntil: 'domcontentloaded' });

        const list = page.locator('.progress ul');
        const rows = page.locator('.progress li');

        await expect(rows).toHaveCount(DIFFICULTIES.length);

        await expect.poll(async () => {
            const opacities = await getOpacities(page, '.progress li');

            return opacities[0] > opacities[opacities.length - 1]
                && opacities[opacities.length - 1] < 1
                && opacities.every((opacity, index) => index === 0 || opacities[index - 1] >= opacity);
        }, POLL_TIGHT).toBe(true);

        expect(await list.evaluate(element => element.style.opacity)).toBe('1');

        await expect.poll(() => areAllRevealed(page, '.progress li'), POLL).toBe(true);
    });

    test('leaves the footer visible without a scroll animation', async ({ page }) => {
        await page.goto('/');

        const footer = page.locator('footer');

        await expect(footer).toHaveCount(1);
        await expect(page.locator('footer[data-scroll], footer [data-scroll]')).toHaveCount(0);
        await expect.poll(() => getOpacity(page.locator('.progress h2')), POLL).toBe('1');

        expect(await getOpacity(footer)).toBe('1');

        await scrollToCenter(footer);

        expect(await getOpacity(footer)).toBe('1');
    });

    test('re-initializes scroll animations after client router navigation', async ({ page }) => {
        await page.goto('/');

        await expect.poll(() => getOpacity(page.locator('.progress h2')), POLL).toBe('1');

        await page.locator('.navbar__input').fill(String(problemId));
        await page.locator(`.navbar__result[href="/p/${problemId}"]`).click();
        await expect(page).toHaveURL(`/p/${problemId}`, POLL);

        const title = page.locator('.solution h1');

        await expect.poll(() => getOpacity(title), POLL).toBe('1');
        await expect.poll(() => getTransform(title), POLL).toBe(SETTLED_TRANSFORM);

        await page.locator('.navbar__link[href="/"]').click();
        await expect(page).toHaveURL('/', POLL);

        const eventsHeading = page.locator('.events h2');

        await expect.poll(() => getOpacity(page.locator('.progress h2')), POLL).toBe('1');
        await expect.poll(() => getTransform(eventsHeading), POLL).toBe(HIDDEN_TRANSFORM);

        expect(await getOpacity(eventsHeading)).toBe('0');
    });

    test('reveals the hidden children of a scroll container when a descendant receives focus', async ({ page }) => {
        await page.goto('/');

        const cards = page.locator('.events li');
        const list = page.locator('.events ul');

        await expect.poll(() => getTransform(cards.first()), POLL).toBe(HIDDEN_TRANSFORM);

        expect(await cards.count()).toBeGreaterThan(0);
        expect(await getOpacity(cards.first())).toBe('0');
        expect(await list.evaluate(element => element.style.opacity)).toBe('1');

        await page.locator('.events__card').first().evaluate((element) => {
            element.focus();
        });

        await expect.poll(() => areAllRevealed(page, '.events li'), POLL).toBe(true);
        await expect.poll(() => areInlinePropsCleared(page, '.events li'), POLL).toBe(true);

        expect(await getTransform(cards.first())).toBe('none');
        expect(await list.evaluate(element => element.style.opacity)).toBe('1');
    });
});

test.describe('scroll motion under reduced motion', () => {
    test.beforeEach(async ({ page }) => {
        await page.emulateMedia({ reducedMotion: 'reduce' });
    });

    test('shows every home page data-scroll element immediately', async ({ page }) => {
        await page.goto('/');

        const list = page.locator('.progress ul');

        expect(await page.locator('[data-scroll]').count()).toBeGreaterThan(1);

        await expect.poll(() => list.evaluate(element => element.style.opacity), POLL_TIGHT).toBe('1');

        expect(await areInlineShown(page)).toBe(true);
        expect(await areRevealed(page)).toBe(true);
    });

    test('sets every progress bar to its data-progress width immediately', async ({ page }) => {
        await page.goto('/');

        const list = page.locator('.progress ul');

        await expect(page.locator('.progress__bar')).toHaveCount(DIFFICULTIES.length);
        await expect.poll(() => list.evaluate(element => element.style.opacity), POLL_TIGHT).toBe('1');

        expect(await areBarsSettled(page)).toBe(true);
    });
});
