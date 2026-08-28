import { expect, test } from '@playwright/test';
import { join, parse } from 'node:path';
import { readdirSync, statSync } from 'node:fs';

import { DIFFICULTIES } from '../../src/lib/constants';

const API_REQUESTS = [
    { method: 'delete', options: { data: {} } },
    { method: 'get', options: {} },
    { method: 'post', options: { data: {} } },
] as const;

const ASTRO_ASSET_PATTERN = /\/_astro\/[^"]+/;
const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const CONTENT_SECURITY_POLICY = 'base-uri \'none\'; connect-src \'self\' https://*.supabase.co; default-src \'self\'; form-action \'none\'; frame-ancestors \'self\'; script-src \'self\' \'unsafe-inline\' data:; style-src \'self\' \'unsafe-inline\'';

const contentRoot = join(process.cwd(), 'src/content');

const dataStructureFiles = readdirSync(join(contentRoot, 'data-structures')).sort();
const problemFiles = listProblemFiles();

const dataStructureSlug = toKebabCase(parse(dataStructureFiles[0]).name);
const problemSlug = String(Math.min(...problemFiles.map(file => Number(file.split('.')[0]))));

const pagePaths = ['/', `/p/${dataStructureSlug}`, `/p/${problemSlug}`] as const;

function listProblemFiles() {
    const files: string[] = [];

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(contentRoot, difficulty);

        for (const subdirectory of readdirSync(difficultyDir)) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (!statSync(subdirectoryPath).isDirectory()) continue;

            files.push(...readdirSync(subdirectoryPath));
        }
    }

    return files;
}

function toKebabCase(name: string) {
    return name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase();
}

test.describe('pages', () => {
    test('serves the core pages as html', async ({ request }) => {
        expect(toKebabCase('LinkedList')).toBe('linked-list');

        for (const path of pagePaths) {
            const response = await request.get(path);

            expect(response.status(), path).toBe(200);
            expect(response.headers()['content-type'], path).toContain('text/html');
        }
    });

    test('serves the error page as html with a 500 status', async ({ request }) => {
        const response = await request.get('/500');

        expect(response.status()).toBe(500);
        expect(response.headers()['content-type']).toContain('text/html');

        expect(await response.text()).toContain('<title>Server Error \u2014 Algo</title>');
    });

    test('returns 404 for unknown pages', async ({ request }) => {
        const response = await request.get('/this-page-does-not-exist');

        expect(response.status()).toBe(404);
        expect(response.headers()['content-type']).toContain('text/html');
    });

    test('serves the hardened security headers', async ({ request }) => {
        const response = await request.get('/');

        expect(response.headers()['content-security-policy']).toBe(CONTENT_SECURITY_POLICY);
        expect(response.headers()['permissions-policy']).toBe('camera=(), microphone=(), geolocation=()');
        expect(response.headers()['referrer-policy']).toBe('strict-origin-when-cross-origin');
        expect(response.headers()['strict-transport-security']).toBe('max-age=31536000; includeSubDomains; preload');
        expect(response.headers()['x-content-type-options']).toBe('nosniff');
        expect(response.headers()['x-frame-options']).toBe('sameorigin');
    });
});

test.describe('api', () => {
    test('serves the search index as a sorted json array', async ({ request }) => {
        const response = await request.get('/api/search.json');

        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/json');

        const index: Record<string, unknown>[] = await response.json();

        expect(Array.isArray(index)).toBe(true);
        expect(dataStructureFiles.length).toBeGreaterThan(0);
        expect(problemFiles.length).toBeGreaterThan(0);
        expect(index.length).toBe(dataStructureFiles.length + problemFiles.length);
        expect(index[0].difficulty).toBe('ds');

        const problemIds = index.slice(dataStructureFiles.length).map(entry => Number(entry.id));

        expect(problemIds).toEqual([...problemIds].sort((idA, idB) => idA - idB));
    });

    test('returns a json 404 for unknown api paths', async ({ request }) => {
        for (const { method, options } of API_REQUESTS) {
            const response = await request[method]('/api/this-route-does-not-exist', options);

            expect(response.status(), method).toBe(404);
            expect(response.headers()['content-type'], method).toContain('application/json');

            const body: Record<string, unknown> = await response.json();

            expect(body.error, method).toBe('Not found.');
        }
    });
});

test.describe('assets', () => {
    test('serves the hashed assets with the immutable cache header', async ({ request }) => {
        const home = await request.get('/');

        const assetPath = (await home.text()).match(ASTRO_ASSET_PATTERN)?.[0] ?? '';

        test.skip(!assetPath, 'no /_astro asset href is resolvable from the home page in dev');

        const response = await request.get(assetPath);

        expect(response.status()).toBe(200);

        const cacheControl = response.headers()['cache-control'] ?? '';

        test.skip(cacheControl.includes('no-store'), 'the dev server replaces the immutable cache header with no-store');

        expect(cacheControl).toBe('public, max-age=31536000, immutable');
    });
});
