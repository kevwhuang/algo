import { beforeAll, describe, expect, test } from 'vitest';
import { join, parse } from 'node:path';
import { readdirSync, statSync } from 'node:fs';

import { DIFFICULTIES } from '../../src/lib/constants';
import { GET } from '../../src/pages/api/search.json';

type RouteContext = Parameters<typeof GET>[0];

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const PROBLEM_TITLE_PATTERN = /^(\d+)\. /;

const contentDir = join(process.cwd(), 'src/content');

const dataStructuresDir = join(contentDir, 'data-structures');
const problemCount = getProblemFileCount();

const dataStructureIds = readdirSync(dataStructuresDir).map(toKebabId);

let entries: Record<string, unknown>[] = [];
let response: Response;

function createContext(): RouteContext {
    return {
        clientAddress: '127.0.0.1',
        request: new Request('http://localhost/api/search.json', { method: 'GET' }),
    } as RouteContext;
}

function getProblemEntries(): Record<string, unknown>[] {
    return entries.slice(dataStructureIds.length);
}

function getProblemFileCount(): number {
    let count = 0;

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(contentDir, difficulty);

        for (const subdirectory of readdirSync(difficultyDir)) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (statSync(subdirectoryPath).isDirectory()) count += readdirSync(subdirectoryPath).length;
        }
    }

    return count;
}

function toKebabId(file: string): string {
    return parse(file).name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase();
}

beforeAll(async () => {
    response = await GET(createContext());
    entries = await response.json();
});

describe('GET', () => {
    test('responds 200 with a json array', () => {
        expect(response.status).toBe(200);
        expect(response.headers.get('content-type')).toContain('application/json');
        expect(Array.isArray(entries)).toBe(true);
    });

    test('indexes every data structure and problem file', () => {
        expect(entries).toHaveLength(dataStructureIds.length + problemCount);
    });

    test('lists data structures first with the ds difficulty and kebab-case ids', () => {
        expect(toKebabId('LinkedList.js')).toBe('linked-list');

        const dataStructureEntries = entries.slice(0, dataStructureIds.length);

        expect(dataStructureEntries.map(entry => entry.id).sort()).toEqual([...dataStructureIds].sort());

        for (const entry of dataStructureEntries) {
            expect(entry.difficulty, String(entry.id)).toBe('ds');
        }
    });

    test('sorts problems ascending by numeric id', () => {
        const problemIds = getProblemEntries().map(entry => Number(entry.id));

        expect(problemIds).toHaveLength(problemCount);
        expect(problemIds).toEqual([...problemIds].sort((a, b) => a - b));
    });

    test('limits every entry to difficulty, id, and title keys', () => {
        for (const entry of entries) {
            expect(Object.keys(entry).sort(), String(entry.id)).toEqual(['difficulty', 'id', 'title']);
        }
    });

    test('keeps every difficulty within ds and the known difficulties', () => {
        const allowed = new Set(['ds', ...DIFFICULTIES]);

        for (const entry of entries) {
            expect(allowed.has(String(entry.difficulty)), String(entry.id)).toBe(true);
        }
    });

    test('gives every entry a non-empty title', () => {
        for (const entry of entries) {
            expect(String(entry.title).length, String(entry.id)).toBeGreaterThan(0);
        }
    });

    test('prefixes every problem title with its own id', () => {
        for (const entry of getProblemEntries()) {
            const match = String(entry.title).match(PROBLEM_TITLE_PATTERN);

            expect(match?.[1], String(entry.id)).toBe(entry.id);
        }
    });

    test('keeps every id unique', () => {
        expect(new Set(entries.map(entry => entry.id)).size).toBe(entries.length);
    });
});
