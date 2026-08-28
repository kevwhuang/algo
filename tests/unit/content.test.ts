import { afterEach, describe, expect, test, vi } from 'vitest';
import { extname, join, parse } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

import { DIFFICULTIES } from '../../src/lib/constants';
import { collections } from '../../src/content.config';

interface CollectionLoader {
    load(context: { store: StubStore }): Promise<void>;
    schema: SchemaParser;
}

interface ProblemFile {
    code: string;
    file: string;
    name: string;
    subdirectory: string;
}

interface SchemaParser {
    safeParse: (data: unknown) => { error?: { message: string }; success: boolean };
}

interface StoreEntry {
    data: Record<string, unknown>;
    filePath: string;
    id: string;
}

interface StubStore {
    clear: () => void;
    entries: StoreEntry[];
    set: (entry: StoreEntry) => void;
}

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const CONTENT_DIR = 'src/content';
const CURLY_APOSTROPHE_PATTERN = /[\u2018\u2019]/;
const FRONT_END_ID_FLOOR = 10_001;
const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;
const LANGUAGE_EXTENSIONS = ['cjs', 'java', 'js', 'jsx', 'mjs', 'py', 'sh', 'sql'] as const;
const PASCAL_CASE_FILE_PATTERN = /^(?:[A-Z][a-z]+)+\.js$/;
const RANGE_DIR_PATTERN = /^(\d+)-(\d+)$/;
const RANGE_SPAN = 999;

const contentRoot = join(process.cwd(), CONTENT_DIR);
const dataStructuresLoader = getLoader(collections.dataStructures);
const problemsLoader = getLoader(collections.problems);

const dataStructureEntries = await loadEntries(dataStructuresLoader);
const problemEntries = await loadEntries(problemsLoader);

const dataStructureFiles = readdirSync(join(contentRoot, 'data-structures'));
const dataStructureParser = dataStructuresLoader.schema;
const problemFiles = loadProblemFiles();
const problemParser = problemsLoader.schema;

const allFiles = [
    ...dataStructureFiles.map(file => ({
        code: readFileSync(join(contentRoot, 'data-structures', file), 'utf-8'),
        name: `data-structures/${file}`,
    })),
    ...problemFiles,
];

function buildProblem(overrides: Record<string, unknown> = {}) {
    return { ...buildSolution(), difficulty: DIFFICULTIES[0], ...overrides };
}

function buildSolution(overrides: Record<string, unknown> = {}) {
    const { lang, langLabel } = dataStructureEntries[0].data;

    return {
        code: 'function identity(value) {\n    return value;\n}\n',
        lang,
        langLabel,
        title: '1. Two Sum',
        ...overrides,
    };
}

function createStore(): StubStore {
    const entries: StoreEntry[] = [];

    return {
        clear() {
            entries.length = 0;
        },
        entries,
        set(entry) {
            entries.push(entry);
        },
    };
}

function expectSchemaSuccess(entries: StoreEntry[], parser: SchemaParser) {
    expect(typeof parser.safeParse).toBe('function');
    expect(entries.length).toBeGreaterThan(0);

    for (const { data, filePath } of entries) {
        const result = parser.safeParse(data);

        expect(result.success, `${filePath}${result.error ? ` ${result.error.message}` : ''}`).toBe(true);
    }
}

function getLoader(collection: unknown) {
    return (collection as { loader: CollectionLoader }).loader;
}

function getStem(file: string) {
    return file.slice(0, file.indexOf('.'));
}

async function loadEntries(loader: CollectionLoader) {
    const store = createStore();

    await loader.load({ store });

    return store.entries;
}

function loadProblemFiles() {
    const files: ProblemFile[] = [];

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(contentRoot, difficulty);

        for (const subdirectory of readdirSync(difficultyDir)) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (!statSync(subdirectoryPath).isDirectory()) continue;

            for (const file of readdirSync(subdirectoryPath)) {
                files.push({
                    code: readFileSync(join(subdirectoryPath, file), 'utf-8'),
                    file,
                    name: `${difficulty}/${subdirectory}/${file}`,
                    subdirectory,
                });
            }
        }
    }

    return files;
}

async function loadVirtualCollections(directories: Record<string, string[]>, files: Record<string, string>) {
    vi.resetModules();

    vi.doMock('node:fs', async (importOriginal) => {
        const original = await importOriginal<typeof import('node:fs')>();

        return {
            ...original,
            readFileSync: (path: string, options: Parameters<typeof original.readFileSync>[1]) => files[path] ?? original.readFileSync(path, options),
            readdirSync: (path: string) => directories[path] ?? original.readdirSync(path),
            statSync: (path: string) => (path in directories || path in files ? { isDirectory: () => path in directories } : original.statSync(path)),
        };
    });

    const { collections: virtualCollections } = await import('../../src/content.config');

    return virtualCollections;
}

function toKebabCase(name: string) {
    return name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase();
}

describe('code files', () => {
    test('files end with a trailing newline', () => {
        expect(allFiles.length).toBeGreaterThan(0);

        for (const { code, name } of allFiles) {
            expect(code.endsWith('\n'), name).toBe(true);
        }
    });

    test('files contain no curly apostrophes', () => {
        for (const { code, name } of allFiles) {
            expect(CURLY_APOSTROPHE_PATTERN.test(code), name).toBe(false);
        }
    });
});

describe('collections', () => {
    test('loads every datum passing its collection schema', () => {
        expect(dataStructureEntries.length).toBe(dataStructureFiles.length);
        expect(problemEntries.length).toBe(problemFiles.length);

        expectSchemaSuccess(dataStructureEntries, dataStructureParser);
        expectSchemaSuccess(problemEntries, problemParser);
    });

    test('keeps the entry count unchanged across repeated loads', async () => {
        for (const [name, collection] of Object.entries(collections)) {
            const loader = getLoader(collection);
            const store = createStore();

            await loader.load({ store });

            const count = store.entries.length;

            await loader.load({ store });

            expect(count, name).toBeGreaterThan(0);
            expect(store.entries.length, name).toBe(count);
        }
    });

    test('keeps ids unique across both collections', () => {
        const ids = [...dataStructureEntries, ...problemEntries].map(({ id }) => id);

        expect(new Set(ids).size).toBe(ids.length);
    });

    test('keeps language extensions matching the on-disk extension set', () => {
        const extensions = [...dataStructureFiles, ...problemFiles.map(({ file }) => file)].map(file => extname(file).slice(1));

        expect([...new Set(extensions)].sort()).toEqual(LANGUAGE_EXTENSIONS);
    });
});

describe('data structures', () => {
    test('derives ids by kebab-casing each filename', () => {
        expect(toKebabCase('BinarySearchTree')).toBe('binary-search-tree');
        expect(dataStructureEntries.length).toBeGreaterThan(0);

        for (const { filePath, id } of dataStructureEntries) {
            expect(id, filePath).toBe(toKebabCase(parse(filePath).name));
        }
    });

    test('names files in PascalCase with a js extension', () => {
        expect(dataStructureFiles.length).toBeGreaterThan(0);

        for (const file of dataStructureFiles) {
            expect(file, file).toMatch(PASCAL_CASE_FILE_PATTERN);
        }
    });
});

describe('loader guards', () => {
    afterEach(() => {
        vi.doUnmock('node:fs');
        vi.resetModules();
    });

    test('rejects a data structure file with an unknown language extension', async () => {
        const dataStructuresDir = join(CONTENT_DIR, 'data-structures');

        const virtualCollections = await loadVirtualCollections(
            { [dataStructuresDir]: ['Whatever.lol'] },
            { [join(dataStructuresDir, 'Whatever.lol')]: 'class Whatever {}\n' },
        );

        await expect(loadEntries(getLoader(virtualCollections.dataStructures))).rejects.toThrow('Unknown language Whatever.lol.');
    });

    test('rejects a problem file without a matching header', async () => {
        const rangeDir = join(CONTENT_DIR, DIFFICULTIES[0], '1-1000');

        const virtualCollections = await loadVirtualCollections(
            {
                ...Object.fromEntries(DIFFICULTIES.map(difficulty => [join(CONTENT_DIR, difficulty), []])),
                [join(CONTENT_DIR, DIFFICULTIES[0])]: ['1-1000'],
                [rangeDir]: ['7.js'],
            },
            { [join(rangeDir, '7.js')]: 'const missingHeader = true;\n' },
        );

        await expect(loadEntries(getLoader(virtualCollections.problems))).rejects.toThrow(`Unmatched header ${join(rangeDir, '7.js')}.`);
    });

    test('skips a stray file inside a difficulty directory', async () => {
        const rangeDir = join(CONTENT_DIR, DIFFICULTIES[0], '1-1000');

        const virtualCollections = await loadVirtualCollections(
            {
                ...Object.fromEntries(DIFFICULTIES.map(difficulty => [join(CONTENT_DIR, difficulty), []])),
                [join(CONTENT_DIR, DIFFICULTIES[0])]: ['.DS_Store', '1-1000'],
                [rangeDir]: ['7.js'],
            },
            {
                [join(CONTENT_DIR, DIFFICULTIES[0], '.DS_Store')]: 'stray bytes\n',
                [join(rangeDir, '7.js')]: '// 7. Reverse Integer\nconst reversed = true;\n',
            },
        );

        const entries = await loadEntries(getLoader(virtualCollections.problems));

        expect(entries.length).toBe(1);
        expect(entries[0].id).toBe('7');
    });
});

describe('problems', () => {
    test('derives each id from its header number and filename stem', () => {
        expect(problemEntries.length).toBeGreaterThan(0);

        for (const { data, filePath, id } of problemEntries) {
            expect(id, filePath).toBe(HEADER_PATTERN.exec(String(data.code))?.[2]);
            expect(id, filePath).toBe(getStem(parse(filePath).base));
        }
    });

    test('matches the solution header pattern in every file', () => {
        expect(HEADER_PATTERN.exec('// 1. Two Sum')?.slice(1)).toEqual(['//', '1', 'Two Sum']);

        for (const { code, name } of problemFiles) {
            expect(HEADER_PATTERN.test(code), name).toBe(true);
        }
    });

    test('names every file by its header id', () => {
        for (const { code, file, name } of problemFiles) {
            expect(HEADER_PATTERN.exec(code)?.[2], name).toBe(getStem(file));
        }
    });

    test('keeps range directory ids within thousand-wide bounds', () => {
        const rangeFiles = problemFiles.filter(({ subdirectory }) => RANGE_DIR_PATTERN.test(subdirectory));

        expect(rangeFiles.length).toBeGreaterThan(0);

        for (const { file, name, subdirectory } of rangeFiles) {
            const [, start, end] = RANGE_DIR_PATTERN.exec(subdirectory) ?? [];
            const id = Number(getStem(file));

            expect(Number(end), subdirectory).toBe(Number(start) + RANGE_SPAN);
            expect(id, name).toBeGreaterThanOrEqual(Number(start));
            expect(id, name).toBeLessThanOrEqual(Number(end));
        }
    });

    test('keeps front-end ids at or above the front-end floor', () => {
        const frontEndFiles = problemFiles.filter(({ subdirectory }) => subdirectory === 'front-end');

        expect(frontEndFiles.length).toBeGreaterThan(0);

        for (const { file, name } of frontEndFiles) {
            expect(Number(getStem(file)), name).toBeGreaterThanOrEqual(FRONT_END_ID_FLOOR);
        }
    });

    test('uses only known language extensions', () => {
        for (const { file, name } of problemFiles) {
            expect(LANGUAGE_EXTENSIONS, name).toContain(extname(file).slice(1));
        }
    });

    test('contains only range and front-end directories in each difficulty', () => {
        for (const difficulty of DIFFICULTIES) {
            const difficultyDir = join(contentRoot, difficulty);
            const subdirectories = readdirSync(difficultyDir);

            expect(subdirectories.length, difficulty).toBeGreaterThan(0);

            for (const subdirectory of subdirectories) {
                expect(statSync(join(difficultyDir, subdirectory)).isDirectory(), `${difficulty}/${subdirectory}`).toBe(true);
                expect(RANGE_DIR_PATTERN.test(subdirectory) || subdirectory === 'front-end', `${difficulty}/${subdirectory}`).toBe(true);
            }
        }
    });
});

describe('schemas', () => {
    test('accepts the crafted solution and problem baselines', () => {
        expect(dataStructureParser.safeParse(buildSolution()).success).toBe(true);
        expect(problemParser.safeParse(buildProblem()).success).toBe(true);
    });

    test('rejects a solution missing its title', () => {
        expect(dataStructureParser.safeParse(buildSolution({ title: undefined })).success).toBe(false);
    });

    test('rejects a solution with an unknown lang', () => {
        expect(dataStructureParser.safeParse(buildSolution({ lang: 'rust' })).success).toBe(false);
    });

    test('rejects a solution with non-string code', () => {
        expect(dataStructureParser.safeParse(buildSolution({ code: 42 })).success).toBe(false);
    });

    test('rejects a problem with an unknown difficulty', () => {
        expect(problemParser.safeParse(buildProblem({ difficulty: 'expert' })).success).toBe(false);
    });
});
