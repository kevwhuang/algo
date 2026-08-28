import { expect, test } from '@playwright/test';
import { join } from 'node:path';
import { readdirSync } from 'node:fs';

import { MEETUP_URL, ROUTES } from '../../src/lib/constants';

import type { Page } from '@playwright/test';

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;

const FOCUS_TARGETS = [
    { name: 'logo link', selector: `.navbar__link[href="${ROUTES[0].href}"]` },
    { name: 'search input', selector: '.navbar__input' },
    { name: 'Meetup link', selector: `.navbar__link[href="${MEETUP_URL}"]` },
    { name: 'LeetCode link', selector: '.navbar__link[href="https://leetcode.com/u/aephonics"]' },
] as const;

const HOME_TITLE = 'Algo';
const JS_EXTENSION_PATTERN = /\.js$/;
const MAX_TAB_PRESSES = 12;
const RANGE_DIR_PATTERN = /^\d+-\d+$/;
const TITLE_PATTERN = /^.+ \u2014 Algo$/;

const contentRoot = join(process.cwd(), 'src/content');

const dataStructureSlug = toKebabCase(readdirSync(join(contentRoot, 'data-structures'))
    .filter(file => JS_EXTENSION_PATTERN.test(file))
    .sort()[0]
    .replace(JS_EXTENSION_PATTERN, ''));

const easyRangeDir = readdirSync(join(contentRoot, 'easy')).filter(entry => RANGE_DIR_PATTERN.test(entry)).sort()[0];

const problemSlug = readdirSync(join(contentRoot, 'easy', easyRangeDir))
    .filter(file => JS_EXTENSION_PATTERN.test(file))
    .sort()[0]
    .replace(JS_EXTENSION_PATTERN, '');

const publicPaths = ['/', `/p/${dataStructureSlug}`, `/p/${problemSlug}`, '/500', '/nonexistent-404'] as const;

function getFocusStyle(page: Page, selector: string) {
    return page.locator(selector).evaluate((element) => {
        const style = getComputedStyle(element);

        return `${style.backgroundColor} ${style.borderTopColor} ${style.opacity} ${style.outlineStyle} ${style.outlineWidth}`;
    });
}

function getRevealedBarWidth(page: Page) {
    return page.locator('.progress__bar').first().evaluate(element => element.style.width);
}

function getSearchLabelText(page: Page) {
    return page.locator('.navbar__input').evaluate(element => element.closest('label')?.querySelector('.sr-only')?.textContent?.trim());
}

function getStructure(page: Page) {
    return page.evaluate(() => ({
        footerParent: document.querySelector('footer')?.parentElement?.tagName,
        h1Count: document.querySelectorAll('h1').length,
        headerParent: document.querySelector('header')?.parentElement?.tagName,
        headingLevels: [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(heading => Number(heading.tagName.slice(1))),
        mainCount: document.querySelectorAll('main, [role="main"]').length,
        missingAltCount: [...document.querySelectorAll('img')].filter(image => !image.hasAttribute('alt')).length,
        nestedLandmarkCount: document.querySelectorAll('main footer, main header').length,
        unresolvedControlIds: [...document.querySelectorAll('[aria-controls]')]
            .flatMap(element => (element.getAttribute('aria-controls') || '').split(/\s+/))
            .filter(id => id && !document.getElementById(id)),
        unresolvedLabelIds: [...document.querySelectorAll('[aria-labelledby]')]
            .flatMap(element => (element.getAttribute('aria-labelledby') || '').split(/\s+/))
            .filter(id => id && !document.getElementById(id)),
    }));
}

function toKebabCase(name: string) {
    return name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase();
}

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('content mirror', () => {
    test('pins the kebab-case slug mirror to a literal fixture', () => {
        expect(toKebabCase('BinaryHeap')).toBe('binary-heap');
    });
});

test.describe('document structure', () => {
    for (const path of publicPaths) {
        test(`${path} exposes sound landmarks, headings, labels, and controls`, async ({ page }) => {
            await page.goto(path);

            const structure = await getStructure(page);

            const skippedLevels = structure.headingLevels.filter((level, index) => level > (structure.headingLevels[index - 1] ?? 0) + 1);

            expect(structure.mainCount).toBe(1);
            expect(structure.headerParent).toBe('BODY');
            expect(structure.footerParent).toBe('BODY');
            expect(structure.nestedLandmarkCount).toBe(0);
            expect(structure.h1Count).toBe(1);
            expect(skippedLevels).toEqual([]);
            expect(structure.missingAltCount).toBe(0);
            expect(structure.unresolvedLabelIds).toEqual([]);
            expect(structure.unresolvedControlIds).toEqual([]);
        });
    }
});

test.describe('keyboard navigation', () => {
    test('tab from body reaches the logo, search input, and external links with visible focus styles', async ({ page }) => {
        await page.goto('/');
        await expect.poll(() => getRevealedBarWidth(page)).not.toBe('');

        const baseline: Record<string, string> = {};
        const remaining = new Map(FOCUS_TARGETS.map(target => [target.selector, target.name]));

        for (const target of FOCUS_TARGETS) {
            baseline[target.selector] = await getFocusStyle(page, target.selector);
        }

        for (let press = 0; press < MAX_TAB_PRESSES && remaining.size > 0; press++) {
            await page.keyboard.press('Tab');

            for (const selector of [...remaining.keys()]) {
                const isFocused = await page.locator(selector).evaluate(element => element === document.activeElement);

                if (!isFocused) continue;

                await expect.poll(() => getFocusStyle(page, selector), { message: `focus indicator on ${remaining.get(selector)}` })
                    .not.toBe(baseline[selector]);

                remaining.delete(selector);
            }
        }

        expect([...remaining.values()]).toEqual([]);
    });
});

test.describe('page titles', () => {
    test('titles are unique, bare on home, and suffixed with an em dash elsewhere', async ({ page }) => {
        const titles: string[] = [];

        for (const path of publicPaths) {
            await page.goto(path);
            titles.push(await page.title());
        }

        expect(new Set(titles).size).toBe(titles.length);
        expect(titles[0]).toBe(HOME_TITLE);

        for (const title of titles.slice(1)) {
            expect(title).toMatch(TITLE_PATTERN);
        }
    });
});

test.describe('search labelling', () => {
    test('the search combobox carries an sr-only label and the results listbox an aria-label', async ({ page }) => {
        await page.goto('/');

        const labelText = await getSearchLabelText(page);

        expect(labelText).toBe('Search solutions');

        await expect(page.locator('#search-results')).toHaveAttribute('aria-label', 'Search results');
    });
});
