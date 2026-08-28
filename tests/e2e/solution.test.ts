import { expect, test } from '@playwright/test';
import { extname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import astroConfig from '../../astro.config';
import { DIFFICULTIES } from '../../src/lib/constants';

interface ProblemFile {
    difficulty: (typeof DIFFICULTIES)[number];
    file: string;
    path: string;
    subdirectory: string;
}

interface SolutionFixture {
    difficulty?: string;
    label: string;
    langLabel: string;
    slug: string;
    title: string;
}

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const CONTENT_DIR = fileURLToPath(new URL('../../src/content', import.meta.url));

const DESCRIPTION_SUFFIXES = [
    ' with copyable source code from Algo.',
    ' with copyable source code from the Algo archive of LeetCode solutions.',
] as const;

const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;

const LANG_LABELS: Record<string, string> = {
    cjs: 'JavaScript',
    java: 'Java',
    js: 'JavaScript',
    jsx: 'JSX',
    mjs: 'JavaScript',
    py: 'Python',
    sh: 'Bash',
    sql: 'SQL',
};

const MIN_DESCRIPTION_LENGTH = 120;
const MIN_SOLUTION_LINES = 3;

const problemFiles = getProblemFiles();
const siteOrigin = new URL(String(astroConfig.site)).origin;

const [firstSuffixProblem] = problemFiles.filter(problem => getDescriptionSuffix(problem) === DESCRIPTION_SUFFIXES[0]);
const [frontEndProblem] = problemFiles.filter(problem => problem.subdirectory === 'front-end');
const [paidSqlProblem] = problemFiles.filter(problem => problem.file.endsWith('.p.sql'));
const [secondSuffixProblem] = problemFiles.filter(problem => getDescriptionSuffix(problem) === DESCRIPTION_SUFFIXES[1]);

const [solvedProblem] = problemFiles.filter(problem =>
    problem.difficulty === 'easy' && problem.subdirectory !== 'front-end' && getLineCount(problem.path) >= MIN_SOLUTION_LINES);

const fixtures = [
    buildDataStructureFixture(),
    buildProblemFixture(solvedProblem, 'solved problem'),
    buildProblemFixture(paidSqlProblem, 'paid sql problem'),
    buildProblemFixture(frontEndProblem, 'front-end problem'),
];

const ladderRungs = [
    { label: 'first', problem: firstSuffixProblem, suffix: DESCRIPTION_SUFFIXES[0] },
    { label: 'second', problem: secondSuffixProblem, suffix: DESCRIPTION_SUFFIXES[1] },
];

function buildDataStructureFixture(): SolutionFixture {
    const [file] = readdirSync(join(CONTENT_DIR, 'data-structures')).sort();
    const { name } = parse(file);

    return {
        label: 'data structure',
        langLabel: LANG_LABELS[extname(file).slice(1)],
        slug: name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase(),
        title: name.replace(CAMEL_BOUNDARY_PATTERN, '$1 $2'),
    };
}

function buildDescription(fixture: Pick<SolutionFixture, 'difficulty' | 'langLabel' | 'title'>) {
    const base = fixture.difficulty
        ? `${fixture.title}: ${fixture.langLabel} solution to the ${fixture.difficulty} practice problem`
        : `${fixture.title}: ${fixture.langLabel} implementation of the data structure`;

    let description = `${base}.`;

    if (description.length < MIN_DESCRIPTION_LENGTH) description = `${base}${DESCRIPTION_SUFFIXES[0]}`;
    if (description.length < MIN_DESCRIPTION_LENGTH) description = `${base}${DESCRIPTION_SUFFIXES[1]}`;

    return description;
}

function buildProblemFixture(problem: ProblemFile, label: string): SolutionFixture {
    const header = readFileSync(problem.path, 'utf-8').match(HEADER_PATTERN);

    if (!header) throw new Error(`Unmatched header ${problem.path}.`);

    return {
        difficulty: problem.difficulty,
        label,
        langLabel: LANG_LABELS[extname(problem.file).slice(1)],
        slug: header[2],
        title: `${header[2]}. ${header[3]}`,
    };
}

function getDescriptionSuffix(problem: ProblemFile) {
    const description = buildDescription(buildProblemFixture(problem, 'suffix probe'));

    return DESCRIPTION_SUFFIXES.find(suffix => description.endsWith(suffix));
}

function getLineCount(filePath: string) {
    return readFileSync(filePath, 'utf-8').trim().split('\n').length;
}

function getProblemFiles() {
    const files: ProblemFile[] = [];

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(CONTENT_DIR, difficulty);

        for (const subdirectory of readdirSync(difficultyDir).sort()) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (!statSync(subdirectoryPath).isDirectory()) continue;

            for (const file of readdirSync(subdirectoryPath).sort()) {
                files.push({ difficulty, file, path: join(subdirectoryPath, file), subdirectory });
            }
        }
    }

    return files;
}

test.beforeEach(async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
});

test.describe('solution page', () => {
    for (const fixture of fixtures) {
        test.describe(`for the ${fixture.label}`, () => {
            test.beforeEach(async ({ page }) => {
                await page.goto(`/p/${fixture.slug}`);
            });

            test('sets the document title, description, and canonical url', async ({ page }) => {
                await expect(page).toHaveTitle(`${fixture.title} \u2014 Algo`);
                await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${siteOrigin}/p/${fixture.slug}`);

                const description = await page.locator('meta[name="description"]').getAttribute('content');

                expect(description).toBe(buildDescription(fixture));
                expect(description?.length).toBeGreaterThanOrEqual(MIN_DESCRIPTION_LENGTH);
            });

            test('renders the heading and badges', async ({ page }) => {
                await expect(page.getByRole('heading', { level: 1 })).toHaveText(fixture.title);

                const badges = page.locator('.solution dl');

                await expect(badges.locator('dt')).toHaveText(fixture.difficulty ? ['Language', 'Difficulty'] : ['Language']);
                await expect(badges.locator('dd')).toHaveText(fixture.difficulty ? [fixture.langLabel, fixture.difficulty] : [fixture.langLabel]);
            });

            test('renders numbered code lines', async ({ page }) => {
                await expect(page.locator('.solution__line').first()).toBeVisible();
            });
        });
    }

    test.describe('description ladder', () => {
        for (const { label, problem, suffix } of ladderRungs) {
            test(`lengthens the description with the ${label} suffix`, async ({ page }) => {
                test.skip(!problem, `no problem base sentence reaches the ${label} suffix`);

                const fixture = buildProblemFixture(problem, `${label} suffix problem`);

                await page.goto(`/p/${fixture.slug}`);

                const description = await page.locator('meta[name="description"]').getAttribute('content');

                expect(description).toBe(buildDescription(fixture));
                expect(description?.endsWith(suffix)).toBe(true);
            });
        }
    });
});

test.describe('content mirror', () => {
    test('pins the description ladder mirror to a literal fixture', () => {
        expect(buildDescription({ difficulty: 'easy', langLabel: 'SQL', title: '1. X' }))
            .toBe('1. X: SQL solution to the easy practice problem with copyable source code from the Algo archive of LeetCode solutions.');
    });

    test('pins the header and camel boundary mirrors to literal fixtures', () => {
        expect('// 1. Two Sum'.match(HEADER_PATTERN)?.[2]).toBe('1');
        expect('MinStack'.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase()).toBe('min-stack');
        expect('MinStack'.replace(CAMEL_BOUNDARY_PATTERN, '$1 $2')).toBe('Min Stack');
    });
});
