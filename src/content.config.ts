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

const extLabel: Record<string, string> = {
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
                        lang: (extLabel[ext] ?? ext).toLowerCase(),
                        langLabel: extLabel[ext] ?? ext.toUpperCase(),
                        title: name.replace(/([a-z])([A-Z])/g, '$1 $2'),
                    },
                    digest: generateDigest(code),
                    filePath,
                    id: slug,
                });
            }

            watcher?.add(dsDir);
        },
        name: 'data-structures-loader',
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
        load: async ({ generateDigest, store, watcher }) => {
            const contentDir = 'src/content';
            const manifest: Problem[] = JSON.parse(
                fs.readFileSync(path.join(contentDir, 'problems.json'), 'utf-8'),
            );
            const problemMap = new Map(manifest.map(problem => [problem.id, problem]));

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

                        let title = `Problem ${num}`;

                        if (commentMatch) {
                            title = `${commentMatch[1]}. ${commentMatch[2].trim()}`;
                        } else if (problem) {
                            title = `${problem.id}. ${problem.title}`;
                        }

                        store.set({
                            data: {
                                code,
                                difficulty,
                                lang: (extLabel[ext] ?? ext).toLowerCase(),
                                langLabel: extLabel[ext] ?? ext.toUpperCase(),
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
        name: 'problems-loader',
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
