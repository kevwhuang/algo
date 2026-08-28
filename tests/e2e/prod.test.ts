import { expect, test } from '@playwright/test';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

import astroConfig from '../../astro.config';
import { DIFFICULTIES } from '../../src/lib/constants';

import type { APIRequestContext } from '@playwright/test';

const MINIMUM_INDEX_LENGTH = 1;
const NETLIFY_CONFIG_PATH = fileURLToPath(new URL('../../netlify.toml', import.meta.url));
const PROBE_TIMEOUT = 15_000;
const SEARCH_ENTRY_FIELDS = ['difficulty', 'id', 'title'] as const;

const STATIC_ASSETS = [
    { contentType: 'image/png', path: '/apple-touch-icon.png' },
    { contentType: 'image/svg+xml', path: '/favicon.svg' },
    { contentType: 'image/png', path: '/og.png' },
] as const;

const SUITE_TIMEOUT = 60_000;
const VALID_DIFFICULTIES = new Set<string>(['ds', ...DIFFICULTIES]);

const baseUrl = new URL(String(astroConfig.site)).origin;

let isProdReachable = false;

function expectNonEmptyString(value: unknown, message: string) {
    expect(typeof value, message).toBe('string');
    expect(value, message).not.toBe('');
}

async function fetchHtml(api: APIRequestContext, path: string) {
    const response = await api.get(`${baseUrl}${path}`);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/html');

    return response.text();
}

async function fetchSearchIndex(api: APIRequestContext) {
    const response = await api.get(`${baseUrl}/api/search.json`);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const entries: Record<string, unknown>[] = await response.json();

    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThanOrEqual(MINIMUM_INDEX_LENGTH);

    return entries;
}

function getSecurityHeaders() {
    const blocks = readFileSync(NETLIFY_CONFIG_PATH, 'utf-8').split('[[headers]]');
    const headers: Record<string, string> = {};

    const globalBlock = blocks.find(block => block.includes('for = \'/*\'')) ?? '';

    for (const [, name, , value] of globalBlock.matchAll(/^([a-z-]+) = (['"])(.*)\2$/gm)) {
        if (name !== 'for') headers[name] = value;
    }

    return headers;
}

test.describe.configure({ timeout: SUITE_TIMEOUT });

test.beforeAll(async ({ request }) => {
    try {
        const response = await request.get(`${baseUrl}/`, { timeout: PROBE_TIMEOUT });

        isProdReachable = response.ok();
    } catch {
        isProdReachable = false;
    }
});

test.beforeEach(() => {
    test.skip(!isProdReachable, `production origin ${baseUrl} is unreachable`);
});

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('production api', () => {
    test('returns a json not found error for an unknown api path', async ({ request }) => {
        const response = await request.get(`${baseUrl}/api/this-endpoint-does-not-exist`);

        expect(response.status()).toBe(404);
        expect(response.headers()['content-type']).toContain('application/json');

        expect(await response.json()).toEqual({ error: 'Not found.' });
    });

    test('serves the search index as a json array of shaped entries with problems sorted ascending', async ({ request }) => {
        const entries = await fetchSearchIndex(request);

        for (const entry of entries) {
            expect(Object.keys(entry).sort(), `entry ${String(entry.id)} carries exactly the index fields`).toEqual([...SEARCH_ENTRY_FIELDS]);
            expect(VALID_DIFFICULTIES.has(String(entry.difficulty)), `entry ${String(entry.id)} difficulty ${String(entry.difficulty)}`).toBe(true);
            expectNonEmptyString(entry.id, `entry ${String(entry.id)} id`);
            expectNonEmptyString(entry.title, `entry ${String(entry.id)} title`);
        }

        const ids = entries.map(entry => String(entry.id));

        expect(new Set(ids).size).toBe(ids.length);

        const dataStructureCount = entries.filter(entry => entry.difficulty === 'ds').length;

        expect(dataStructureCount).toBeGreaterThanOrEqual(MINIMUM_INDEX_LENGTH);
        expect(entries.slice(0, dataStructureCount).every(entry => entry.difficulty === 'ds')).toBe(true);

        const problems = entries.filter(entry => entry.difficulty !== 'ds');

        expect(problems.length).toBeGreaterThanOrEqual(MINIMUM_INDEX_LENGTH);

        for (const problem of problems) {
            expect(String(problem.title), `problem ${String(problem.id)} title carries its id`).toMatch(new RegExp(`^${String(problem.id)}\\. `));
        }

        const problemIds = problems.map(problem => Number(problem.id));

        expect(problemIds).toEqual([...problemIds].sort((idA, idB) => idA - idB));
    });
});

test.describe('production assets', () => {
    test('serves robots.txt referencing the sitemap index', async ({ request }) => {
        const response = await request.get(`${baseUrl}/robots.txt`);

        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('text/plain');

        expect(await response.text()).toContain(`${baseUrl}/sitemap-index.xml`);
    });

    test('serves the sitemap index as xml', async ({ request }) => {
        const response = await request.get(`${baseUrl}/sitemap-index.xml`);

        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('xml');

        expect(await response.text()).toContain('<sitemapindex');
    });

    for (const asset of STATIC_ASSETS) {
        test(`serves ${asset.path} with the ${asset.contentType} content type`, async ({ request }) => {
            const response = await request.get(`${baseUrl}${asset.path}`);

            expect(response.status()).toBe(200);
            expect(response.headers()['content-type']).toContain(asset.contentType);
        });
    }
});

test.describe('production pages', () => {
    test('serves the home page with the bare algo title', async ({ request }) => {
        const html = await fetchHtml(request, '/');

        expect(html).toContain('<title>Algo</title>');
    });

    test('serves the solution page for the first indexed problem', async ({ request }) => {
        const entries = await fetchSearchIndex(request);

        const problem = entries.find(entry => entry.difficulty !== 'ds');

        expect(problem).toBeDefined();

        const html = await fetchHtml(request, `/p/${String(problem?.id)}`);

        expect(html).toContain(`<title>${String(problem?.title)} \u2014 Algo</title>`);
        expect(html).toContain('solution__code');
    });

    test('returns the not found page for an unknown path', async ({ request }) => {
        const response = await request.get(`${baseUrl}/this-page-does-not-exist`);

        expect(response.status()).toBe(404);
        expect(response.headers()['content-type']).toContain('text/html');

        expect(await response.text()).toContain('<title>Page Not Found \u2014 Algo</title>');
    });

    test('serves the configured security headers on the home page', async ({ request }) => {
        const securityHeaders = getSecurityHeaders();

        expect(securityHeaders['x-content-type-options']).toBe('nosniff');

        const response = await request.get(`${baseUrl}/`);

        const headers = response.headers();

        for (const [name, value] of Object.entries(securityHeaders)) {
            expect(headers[name], `header ${name}`).toBe(value);
        }
    });

    test('renders the home page in a real browser without issuing mutation requests', async ({ page }) => {
        const mutationRequests: string[] = [];

        page.on('request', (request) => {
            if (request.method() !== 'GET') mutationRequests.push(`${request.method()} ${request.url()}`);
        });

        const response = await page.goto(`${baseUrl}/`);

        expect(response?.status()).toBe(200);

        await expect(page).toHaveTitle('Algo');
        await expect(page.getByRole('progressbar')).toHaveCount(DIFFICULTIES.length);

        expect(mutationRequests).toEqual([]);
    });
});
