import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import Progress from '../../src/sections/Progress.astro';
import { DIFFICULTIES } from '../../src/lib/constants';

type Difficulty = (typeof DIFFICULTIES)[number];

const CONTENT_DIR = fileURLToPath(new URL('../../src/content', import.meta.url));

const DIFFICULTY_CLASSES = {
    easy: { bar: 'from-emerald to-emerald-bright', label: 'text-emerald', track: 'bg-emerald-15' },
    hard: { bar: 'from-red to-red-bright', label: 'text-red', track: 'bg-red-15' },
    medium: { bar: 'from-amber to-amber-bright', label: 'text-amber', track: 'bg-amber-15' },
} as const;

const MIN_SOLUTION_LINES = 3;
const PERCENT = 100;

const firstSolvedEasyFile = getFiles(DIFFICULTIES[0]).find(file => isSolved(readFileSync(file, 'utf-8')));

const stats = DIFFICULTIES.map((difficulty) => {
    const codes = getFiles(difficulty).map(file => readFileSync(file, 'utf-8'));
    const completed = codes.filter(isSolved).length;
    const total = codes.length;

    return { completed, difficulty, percent: total > 0 ? Math.round((completed / total) * PERCENT) : 0, total };
});

function getFiles(difficulty: Difficulty) {
    const difficultyDir = join(CONTENT_DIR, difficulty);
    const files: string[] = [];

    for (const subdirectory of readdirSync(difficultyDir)) {
        const subdirectoryPath = join(difficultyDir, subdirectory);

        if (!statSync(subdirectoryPath).isDirectory() || subdirectory === 'front-end') continue;

        for (const file of readdirSync(subdirectoryPath)) {
            files.push(join(subdirectoryPath, file));
        }
    }

    return files;
}

function isSolved(code: string) {
    return code.trim().split('\n').length >= MIN_SOLUTION_LINES;
}

describe('Progress', () => {
    let html: string;
    let rows: string[];

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(Progress);

        rows = [...html.matchAll(/<li>([\s\S]*?)<\/li>/g)].map(match => match[1]);
    });

    test('labels the section as the progress landmark', () => {
        expect(html).toContain('<section class="progress section" aria-label="Progress">');
    });

    test('renders the site name as the only screen-reader heading', () => {
        expect(html).toContain('<h1 class="sr-only">Algo</h1>');
        expect(html.split('<h1').length - 1).toBe(1);
    });

    test('renders the progress heading marked for scroll animation', () => {
        expect(html).toMatch(/<h2[^>]* data-scroll[^>]*>\s*Progress\s*<\/h2>/);
    });

    test('staggers the progress list for scroll animation', () => {
        expect(html).toMatch(/<ul class="flex flex-col gap-\(--gap-l\)" data-scroll data-scroll-stagger="0\.1">/);
    });

    test('renders three progress rows in difficulty tier order', () => {
        const positions = DIFFICULTIES.map(difficulty => html.indexOf(`>${difficulty}<`));

        expect(rows.length).toBe(DIFFICULTIES.length);
        expect(positions[0]).toBeGreaterThan(-1);

        for (const [index, position] of positions.entries()) {
            if (index > 0) expect(position, DIFFICULTIES[index]).toBeGreaterThan(positions[index - 1]);
        }
    });

    test('pins the completion threshold beside a solved easy file on disk', () => {
        expect(firstSolvedEasyFile, 'solved easy file').toBeDefined();
        expect(isSolved('// 1. Two Sum\n\nconst solved = true;')).toBe(true);
        expect(isSolved('// 1. Two Sum\n')).toBe(false);
    });

    for (const [index, { completed, difficulty, percent, total }] of stats.entries()) {
        const { bar, label, track } = DIFFICULTY_CLASSES[difficulty];

        test(`renders the ${difficulty} label with its tier color`, () => {
            expect(rows[index]).toContain(`<dt class="capitalize font-semibold text-title ${label}">${difficulty}</dt>`);
        });

        test(`renders the derived ${difficulty} solve counts`, () => {
            const countsPattern = new RegExp(`<dd class="font-mono text-lead">\\s*${completed}\\s*<span class="text-zinc-400">/${total}</span>`);

            expect(completed, difficulty).toBeLessThanOrEqual(total);
            expect(total, difficulty).toBeGreaterThan(0);
            expect(rows[index]).toMatch(countsPattern);
        });

        test(`exposes the ${difficulty} progressbar semantics`, () => {
            const pattern = [
                `<div class="overflow-hidden h-4 rounded-full ${track}"`,
                ` aria-label="${difficulty} progress"`,
                ` aria-valuemax="${total}" aria-valuemin="0" aria-valuenow="${completed}" role="progressbar">`,
            ].join('');

            expect(rows[index]).toContain(pattern);
        });

        test(`encodes the ${difficulty} completion percent on a zero-width bar`, () => {
            expect(rows[index]).toContain(`<div class="progress__bar h-full w-0 rounded-full bg-linear-to-r ${bar}" data-progress="${percent}">`);
        });
    }
});
