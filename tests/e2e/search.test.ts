import { expect, test } from '@playwright/test';
import { join, parse } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import { DIFFICULTIES } from '../../src/lib/constants';

import type { Page } from '@playwright/test';

interface SearchEntry {
    difficulty: string;
    id: string;
    title: string;
}

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const CONTENT_DIR = 'src/content';
const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;
const NO_MATCH_QUERY = 'zzzzzzzz';
const TITLE_PREFIX_PATTERN = /^\d+\. /;

const searchEntries = loadSearchEntries();

const dataStructure = getDataStructure();
const problem = getProblem();

const dataStructureQuery = dataStructure.title.toLowerCase();
const problemTitleQuery = problem.title.replace(TITLE_PREFIX_PATTERN, '').toLowerCase();

async function createPageLoadGate(page: Page) {
    await page.evaluate(() => {
        document.addEventListener('astro:page-load', () => {
            document.body.dataset.pageLoadGate = 'true';
        }, { once: true });
    });
}

function getDataStructure() {
    const entry = searchEntries.find(candidate => candidate.difficulty === 'ds' && getMatches(candidate.title)[0] === candidate);

    if (!entry) throw new Error('Expected a data structure entry leading the matches for its own title.');

    return entry;
}

function getHoverQueries(): [string, string] {
    let first = '';
    let firstLeading: SearchEntry | null = null;

    for (const entry of searchEntries) {
        for (const word of entry.title.toLowerCase().split(' ')) {
            if (!word) continue;

            const matches = getMatches(word);

            if (matches.length < 2) continue;

            if (!firstLeading) {
                first = word;
                firstLeading = matches[0];

                continue;
            }

            if (matches[0] !== firstLeading) return [first, word];
        }
    }

    throw new Error('Expected two title words with at least two matches and distinct leading matches.');
}

function getMatches(query: string) {
    const normalizedQuery = query.trim().toLowerCase();

    return searchEntries.filter(entry => entry.id === normalizedQuery || entry.title.toLowerCase().includes(normalizedQuery));
}

function getMessage(page: Page) {
    return page.locator('#search-message');
}

function getOverflowQuery(minimumMatches: number) {
    for (const entry of searchEntries) {
        for (const word of entry.title.toLowerCase().split(' ')) {
            if (!word) continue;

            if (getMatches(word).length >= minimumMatches) return word;
        }
    }

    throw new Error(`Expected a title word with at least ${minimumMatches} matches.`);
}

function getProblem() {
    const entry = searchEntries.find(candidate => candidate.difficulty !== 'ds' && getMatches(candidate.id)[0] === candidate);

    if (!entry) throw new Error('Expected a problem entry leading the matches for its own id.');

    return entry;
}

function getResults(page: Page) {
    return page.locator('#search-results');
}

function getSearchInput(page: Page) {
    return page.getByRole('combobox');
}

function getVisibleResults(page: Page) {
    return getResults(page).locator('.navbar__result:not([hidden])');
}

async function gotoHome(page: Page) {
    const indexLoaded = page.waitForResponse('**/api/search.json');

    await page.goto('/');
    await indexLoaded;
}

function loadSearchEntries(): SearchEntry[] {
    const dataStructures = readdirSync(join(CONTENT_DIR, 'data-structures')).map((file) => {
        const { name } = parse(file);

        return {
            difficulty: 'ds',
            id: name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase(),
            title: name.replace(CAMEL_BOUNDARY_PATTERN, '$1 $2'),
        };
    });

    const problems: SearchEntry[] = [];

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(CONTENT_DIR, difficulty);

        for (const subdirectory of readdirSync(difficultyDir)) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (!statSync(subdirectoryPath).isDirectory()) continue;

            for (const file of readdirSync(subdirectoryPath)) {
                const filePath = join(subdirectoryPath, file);

                const header = readFileSync(filePath, 'utf-8').match(HEADER_PATTERN);

                if (!header) throw new Error(`Unmatched header ${filePath}.`);

                problems.push({ difficulty, id: header[2], title: `${header[2]}. ${header[3]}` });
            }
        }
    }

    problems.sort((first, second) => Number(first.id) - Number(second.id));

    return [...dataStructures, ...problems];
}

async function mockApiWrites(page: Page) {
    const writes: string[] = [];

    await page.route('**/api/**', async (route) => {
        if (route.request().method() === 'GET') {
            await route.fallback();

            return;
        }

        writes.push(`${route.request().method()} ${route.request().url()}`);

        await route.fulfill({ json: {} });
    });

    return writes;
}

async function mockSearchIndexCalls(page: Page) {
    const calls: string[] = [];

    await page.route('**/api/search.json', async (route) => {
        calls.push(route.request().url());

        await route.fallback();
    });

    return calls;
}

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('search', () => {
    test.beforeEach(async ({ page }) => {
        await gotoHome(page);
    });

    test('slash shortcut focuses the search input without typing a slash', async ({ page }) => {
        const input = getSearchInput(page);

        await expect(input).not.toBeFocused();

        await page.keyboard.press('/');

        await expect(input).toBeFocused();
        await expect(input).toHaveValue('');

        await page.keyboard.press('/');

        await expect(input).toHaveValue('');
    });

    test('ignores the slash shortcut with a held modifier', async ({ page }) => {
        await page.keyboard.press('Control+/');

        await expect(getSearchInput(page)).not.toBeFocused();

        await page.keyboard.press('/');

        await expect(getSearchInput(page)).toBeFocused();
    });

    test('typing a title substring lists matching results in index order', async ({ page }) => {
        const input = getSearchInput(page);

        const slotCount = await getResults(page).locator('.navbar__result').count();

        const expected = getMatches(problemTitleQuery).slice(0, slotCount);

        expect(expected.length).toBeGreaterThan(0);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(getResults(page)).toHaveClass(/navbar__results--open/);
        await expect(getVisibleResults(page)).toHaveCount(expected.length);

        for (const [index, entry] of expected.entries()) {
            const result = getVisibleResults(page).nth(index);

            await expect(result.locator('.navbar__result-title'), entry.id).toHaveText(entry.title);
            await expect(result.locator('.navbar__badge'), entry.id).toHaveText(entry.difficulty);
            await expect(result.locator('.navbar__badge'), entry.id).toHaveAttribute('data-difficulty', entry.difficulty);
            await expect(result, entry.id).toHaveAttribute('href', `/p/${entry.id}`);
        }

        await expect(getVisibleResults(page).first()).toHaveAttribute('aria-selected', 'true');
        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');
    });

    test('caps the visible results at the rendered slot count', async ({ page }) => {
        const input = getSearchInput(page);

        const slotCount = await getResults(page).locator('.navbar__result').count();

        const overflowQuery = getOverflowQuery(slotCount + 1);

        expect(getMatches(overflowQuery).length).toBeGreaterThan(slotCount);

        await input.fill(overflowQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(getVisibleResults(page)).toHaveCount(slotCount);
        await expect(getMessage(page)).toBeHidden();
    });

    test('matches a problem by its exact id', async ({ page }) => {
        expect('// 1. Two Sum'.match(HEADER_PATTERN)?.[2]).toBe('1');
        expect(getMatches(problem.id)[0]).toBe(problem);

        await getSearchInput(page).fill(problem.id);

        const first = getVisibleResults(page).first();

        await expect(first.locator('.navbar__result-title')).toHaveText(problem.title);
        await expect(first.locator('.navbar__badge')).toHaveAttribute('data-difficulty', problem.difficulty);
        await expect(first).toHaveAttribute('href', `/p/${problem.id}`);
        await expect(first).toHaveAttribute('aria-selected', 'true');
    });

    test('badges a data structure result as ds', async ({ page }) => {
        expect('MinStack'.replace(CAMEL_BOUNDARY_PATTERN, '$1 $2')).toBe('Min Stack');

        await getSearchInput(page).fill(dataStructureQuery);

        const first = getVisibleResults(page).first();

        await expect(first.locator('.navbar__result-title')).toHaveText(dataStructure.title);
        await expect(first.locator('.navbar__badge')).toHaveText('ds');
        await expect(first.locator('.navbar__badge')).toHaveAttribute('data-difficulty', 'ds');
    });

    test('arrow keys move and wrap the active option', async ({ page }) => {
        const input = getSearchInput(page);

        const slotCount = await getResults(page).locator('.navbar__result').count();

        expect(slotCount).toBeGreaterThan(1);

        await input.fill(getOverflowQuery(slotCount + 1));

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');

        await input.press('ArrowDown');

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-1');
        await expect(getVisibleResults(page).nth(1)).toHaveAttribute('aria-selected', 'true');
        await expect(getVisibleResults(page).first()).toHaveAttribute('aria-selected', 'false');

        await input.press('ArrowUp');

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');

        await input.press('ArrowUp');

        await expect(input).toHaveAttribute('aria-activedescendant', `search-result-${slotCount - 1}`);
        await expect(getVisibleResults(page).last()).toHaveAttribute('aria-selected', 'true');

        await input.press('ArrowDown');

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');
        await expect(getVisibleResults(page).first()).toHaveAttribute('aria-selected', 'true');
    });

    test('hovering a result selects it and typing resets the selection only after the pointer leaves', async ({ page }) => {
        const [firstQuery, secondQuery] = getHoverQueries();
        const input = getSearchInput(page);

        await input.fill(firstQuery);

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');

        await getVisibleResults(page).nth(1).hover();

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-1');
        await expect(getVisibleResults(page).nth(1)).toHaveAttribute('aria-selected', 'true');
        await expect(getVisibleResults(page).first()).toHaveAttribute('aria-selected', 'false');

        await input.fill(secondQuery);

        await expect(getVisibleResults(page).first().locator('.navbar__result-title')).toHaveText(getMatches(secondQuery)[0].title);
        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-1');
        await expect(getVisibleResults(page).nth(1)).toHaveAttribute('aria-selected', 'true');

        await page.mouse.move(0, 0);
        await input.fill(firstQuery);

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');
        await expect(getVisibleResults(page).first()).toHaveAttribute('aria-selected', 'true');
    });

    test('enter on the active option navigates to the solution page', async ({ page }) => {
        const input = getSearchInput(page);

        await input.fill(problem.id);

        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');

        await input.press('Enter');

        await expect(page).toHaveURL(`/p/${problem.id}`);
        await expect(page.locator('h1')).toHaveText(problem.title);
    });

    test('clicking a result navigates to the solution page', async ({ page }) => {
        await getSearchInput(page).fill(dataStructureQuery);
        await getVisibleResults(page).first().click();

        await expect(page).toHaveURL(`/p/${dataStructure.id}`);
        await expect(page.locator('h1')).toHaveText(dataStructure.title);
    });

    test('shows the empty message for a query without matches', async ({ page }) => {
        expect(getMatches(NO_MATCH_QUERY)).toHaveLength(0);

        const input = getSearchInput(page);

        await input.fill(NO_MATCH_QUERY);

        await expect(getMessage(page)).toBeVisible();
        await expect(getMessage(page)).toHaveText('No results.');
        await expect(input).toHaveAttribute('aria-activedescendant', 'search-message');
        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(getVisibleResults(page)).toHaveCount(0);
    });

    test('escape closes open results and a second escape clears the input', async ({ page }) => {
        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');

        await page.keyboard.press('Escape');

        await expect(input).toHaveAttribute('aria-expanded', 'false');
        await expect(getResults(page)).not.toHaveClass(/navbar__results--open/);
        await expect(input).not.toHaveAttribute('aria-activedescendant');
        await expect(input).toHaveValue(problemTitleQuery);

        await page.keyboard.press('Escape');

        await expect(input).toHaveValue('');
    });

    test('refocusing the input with a retained query reopens the results', async ({ page }) => {
        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');

        await page.keyboard.press('Escape');

        await expect(input).toHaveAttribute('aria-expanded', 'false');
        await expect(input).toHaveValue(problemTitleQuery);

        await input.blur();
        await input.focus();

        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(getResults(page)).toHaveClass(/navbar__results--open/);
        await expect(input).toHaveAttribute('aria-activedescendant', 'search-result-0');
    });

    test('a document click outside the search closes the results while focus stays in the input', async ({ page }) => {
        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(input).toBeFocused();

        const focusRetained = await page.evaluate(() => {
            const searchInput = document.querySelector('search input');

            document.dispatchEvent(new MouseEvent('click', { bubbles: true }));

            return document.activeElement === searchInput;
        });

        expect(focusRetained).toBe(true);

        await expect(input).toHaveAttribute('aria-expanded', 'false');
        await expect(getResults(page)).not.toHaveClass(/navbar__results--open/);
        await expect(input).toBeFocused();
    });

    test('moving focus out of the search closes the results', async ({ page }) => {
        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');

        await input.blur();

        await expect(input).toHaveAttribute('aria-expanded', 'false');
        await expect(getResults(page)).not.toHaveClass(/navbar__results--open/);
    });

    test('slash shortcut focuses the re-initialized input after client router navigation', async ({ page }) => {
        await createPageLoadGate(page);
        await getSearchInput(page).fill(dataStructureQuery);
        await getVisibleResults(page).first().click();

        await expect(page).toHaveURL(`/p/${dataStructure.id}`);
        await expect(page.locator('body[data-page-load-gate="true"]')).toBeAttached();

        await page.keyboard.press('/');

        await expect(getSearchInput(page)).toBeFocused();

        await getSearchInput(page).fill(problemTitleQuery);

        await expect(getSearchInput(page)).toHaveAttribute('aria-expanded', 'true');
    });
});

test.describe('search requests', () => {
    test('fetches the search index once across searches', async ({ page }) => {
        const calls = await mockSearchIndexCalls(page);

        await gotoHome(page);

        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');

        await input.fill('');

        await expect(input).toHaveAttribute('aria-expanded', 'false');

        await input.fill(dataStructureQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');

        expect(calls).toHaveLength(1);
    });

    test('retries the index fetch after a failure and opens the results', async ({ page }) => {
        let failing = true;
        let indexCalls = 0;

        await page.route('**/api/search.json', async (route) => {
            indexCalls++;

            if (failing) {
                await route.fulfill({ status: 500 });

                return;
            }

            await route.fallback();
        });

        await gotoHome(page);

        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect.poll(() => indexCalls).toBe(2);
        await expect(input).toHaveAttribute('aria-expanded', 'false');
        await expect(getResults(page)).not.toHaveClass(/navbar__results--open/);
        await expect(getMessage(page)).toBeHidden();

        failing = false;

        await input.fill(dataStructureQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(getVisibleResults(page).first().locator('.navbar__result-title')).toHaveText(dataStructure.title);

        expect(indexCalls).toBe(3);
    });

    test('keeps the results closed when the index response lands after blur', async ({ page }) => {
        let indexCalls = 0;
        let releaseIndex = () => {};

        const indexGate = new Promise<void>((resolve) => {
            releaseIndex = resolve;
        });

        await page.route('**/api/search.json', async (route) => {
            indexCalls++;

            await indexGate;
            await route.fallback();
        });

        await page.goto('/');

        await expect.poll(() => indexCalls).toBe(1);

        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);
        await input.blur();

        const indexLoaded = page.waitForResponse('**/api/search.json');

        releaseIndex();

        const response = await indexLoaded;

        await response.finished();

        await expect.poll(() => page.evaluate(() => document.activeElement === document.body)).toBe(true);
        await expect(input).toHaveAttribute('aria-expanded', 'false');
        await expect(getResults(page)).not.toHaveClass(/navbar__results--open/);

        await input.focus();

        await expect(input).toHaveAttribute('aria-expanded', 'true');
        await expect(input).toHaveValue(problemTitleQuery);

        expect(indexCalls).toBe(1);
    });

    test('issues no write requests across a search flow', async ({ page }) => {
        const writes = await mockApiWrites(page);

        await gotoHome(page);

        const input = getSearchInput(page);

        await input.fill(problemTitleQuery);

        await expect(input).toHaveAttribute('aria-expanded', 'true');

        await input.fill(problem.id);
        await input.press('Enter');

        await expect(page).toHaveURL(`/p/${problem.id}`);

        expect(writes).toEqual([]);
    });
});
