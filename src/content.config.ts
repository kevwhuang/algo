import { defineCollection, z } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';

import type { Loader } from 'astro/loaders';

interface Problem {
    database: boolean;
    difficulty: string;
    id: number;
    paid: boolean;
    slug: string;
    title: string;
}

const EXT_TO_LANG: Record<string, string> = {
    cjs: 'javascript',
    java: 'java',
    js: 'javascript',
    jsx: 'jsx',
    mjs: 'javascript',
    py: 'python',
    sh: 'bash',
    sql: 'sql',
};

const EXT_TO_LABEL: Record<string, string> = {
    cjs: 'JavaScript',
    java: 'Java',
    js: 'JavaScript',
    jsx: 'JSX',
    mjs: 'JavaScript',
    py: 'Python',
    sh: 'Bash',
    sql: 'SQL',
};

function dataStructuresLoader(): Loader {
    return {
        name: 'data-structures-loader',
        load: async ({ generateDigest, store, watcher }) => {
            const dsDir = 'src/content/data-structures';

            store.clear();

            for (const file of fs.readdirSync(dsDir)) {
                if (file.startsWith('.')) continue;
                const filePath = path.join(dsDir, file);
                const ext = file.split('.').pop() ?? 'js';
                const code = fs.readFileSync(filePath, 'utf-8');
                const name = file.replace(/\.(js|mjs)$/, '');
                const slug = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

                store.set({
                    data: {
                        code,
                        lang: EXT_TO_LANG[ext] ?? 'text',
                        langLabel: EXT_TO_LABEL[ext] ?? ext.toUpperCase(),
                        title: name.replace(/([a-z])([A-Z])/g, '$1 $2'),
                    },
                    digest: generateDigest(code),
                    filePath,
                    id: slug,
                });
            }

            watcher?.add(dsDir);
        },
        schema: z.object({
            code: z.string(),
            lang: z.string(),
            langLabel: z.string(),
            title: z.string(),
        }),
    };
}

function problemsLoader(): Loader {
    return {
        name: 'problems-loader',
        load: async ({ generateDigest, store, watcher }) => {
            const contentDir = 'src/content';
            const manifest: Problem[] = JSON.parse(
                fs.readFileSync(path.join(contentDir, 'problems.json'), 'utf-8'),
            );
            const problemMap = new Map(manifest.map(p => [p.id, p]));

            store.clear();

            for (const difficulty of ['easy', 'medium', 'hard']) {
                const diffDir = path.join(contentDir, difficulty);
                if (!fs.existsSync(diffDir)) continue;
                for (const sub of fs.readdirSync(diffDir)) {
                    const subDir = path.join(diffDir, sub);
                    if (!fs.statSync(subDir).isDirectory()) continue;
                    for (const file of fs.readdirSync(subDir)) {
                        if (file.startsWith('.')) continue;
                        const filePath = path.join(subDir, file);
                        const ext = file.split('.').pop() ?? 'js';
                        const code = fs.readFileSync(filePath, 'utf-8');
                        const num = parseInt(file);

                        if (isNaN(num)) continue;
                        const problem = problemMap.get(num);
                        const commentMatch = code.match(/^(?:\/\/|--|#)\s*(\d+)\.\s*(.+)/);
                        const title = problem
                            ? `${problem.id}. ${problem.title}`
                            : commentMatch
                                ? `${commentMatch[1]}. ${commentMatch[2].trim()}`
                                : `Problem ${num}`;

                        store.set({
                            data: {
                                code,
                                difficulty,
                                lang: EXT_TO_LANG[ext] ?? 'text',
                                langLabel: EXT_TO_LABEL[ext] ?? ext.toUpperCase(),
                                title,
                            },
                            digest: generateDigest(code),
                            filePath,
                            id: String(num),
                        });
                    }
                }
            }

            watcher?.add(path.join(contentDir, '{easy,medium,hard}/**/*'));
        },
        schema: z.object({
            code: z.string(),
            difficulty: z.string(),
            lang: z.string(),
            langLabel: z.string(),
            title: z.string(),
        }),
    };
}

const dataStructures = defineCollection({ loader: dataStructuresLoader() });
const problems = defineCollection({ loader: problemsLoader() });

export const collections = { dataStructures, problems };
