import { defineCollection } from 'astro:content';
import { extname, join, parse } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { z } from 'astro/zod';

import { DIFFICULTIES } from '@lib/constants';

import type { LoaderContext } from 'astro/loaders';

const CAMEL_BOUNDARY_PATTERN = /([a-z])([A-Z])/g;
const CONTENT_DIR = 'src/content';
const HEADER_PATTERN = /^(\/\/|--|#) (\d+)\. (.+)/;
const LANGS = ['bash', 'java', 'javascript', 'jsx', 'python', 'sql'] as const;

const DATA_STRUCTURES_DIR = join(CONTENT_DIR, 'data-structures');

const LANGUAGES: Record<string, { lang: (typeof LANGS)[number]; langLabel: string }> = {
    cjs: { lang: 'javascript', langLabel: 'JavaScript' },
    java: { lang: 'java', langLabel: 'Java' },
    js: { lang: 'javascript', langLabel: 'JavaScript' },
    jsx: { lang: 'jsx', langLabel: 'JSX' },
    mjs: { lang: 'javascript', langLabel: 'JavaScript' },
    py: { lang: 'python', langLabel: 'Python' },
    sh: { lang: 'bash', langLabel: 'Bash' },
    sql: { lang: 'sql', langLabel: 'SQL' },
};

const solutionSchema = z.object({
    code: z.string(),
    lang: z.enum(LANGS),
    langLabel: z.string(),
    title: z.string(),
});

const dataStructures = defineCollection({
    loader: { load: loadDataStructures, name: 'data-structures-loader', schema: solutionSchema },
});

const problems = defineCollection({
    loader: { load: loadProblems, name: 'problems-loader', schema: solutionSchema.extend({ difficulty: z.enum(DIFFICULTIES) }) },
});

function getLanguage(file: string) {
    const language = LANGUAGES[extname(file).slice(1)];

    if (!language) throw new Error(`Unknown language ${file}.`);

    return language;
}

async function loadDataStructures({ store }: LoaderContext) {
    store.clear();

    for (const file of readdirSync(DATA_STRUCTURES_DIR)) {
        const filePath = join(DATA_STRUCTURES_DIR, file);
        const { name } = parse(file);

        const code = readFileSync(filePath, 'utf-8');

        store.set({
            data: { ...getLanguage(file), code, title: name.replace(CAMEL_BOUNDARY_PATTERN, '$1 $2') },
            filePath,
            id: name.replace(CAMEL_BOUNDARY_PATTERN, '$1-$2').toLowerCase(),
        });
    }
}

async function loadProblems({ store }: LoaderContext) {
    store.clear();

    for (const difficulty of DIFFICULTIES) {
        const difficultyDir = join(CONTENT_DIR, difficulty);

        for (const subdirectory of readdirSync(difficultyDir)) {
            const subdirectoryPath = join(difficultyDir, subdirectory);

            if (!statSync(subdirectoryPath).isDirectory()) continue;

            for (const file of readdirSync(subdirectoryPath)) {
                const filePath = join(subdirectoryPath, file);

                const code = readFileSync(filePath, 'utf-8');

                const header = code.match(HEADER_PATTERN);

                if (!header) throw new Error(`Unmatched header ${filePath}.`);

                store.set({
                    data: { ...getLanguage(file), code, difficulty, title: `${header[2]}. ${header[3]}` },
                    filePath,
                    id: header[2],
                });
            }
        }
    }
}

export const collections = { dataStructures, problems };
