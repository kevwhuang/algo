import fs from 'node:fs';
import path from 'node:path';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import type { Loader } from 'astro/loaders';

const extensionLabel: Record<string, string> = {
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
            const directory = 'src/content/data-structures';

            store.clear();

            for (const file of fs.readdirSync(directory)) {
                if (file.startsWith('.')) continue;

                const extension = file.split('.').pop() ?? 'js';
                const filePath = path.join(directory, file);
                const name = file.replace(/\.(js|mjs)$/, '');

                const code = fs.readFileSync(filePath, 'utf-8');
                const slug = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

                store.set({
                    data: {
                        code,
                        lang: (extensionLabel[extension] ?? extension).toLowerCase(),
                        langLabel: extensionLabel[extension] ?? extension.toUpperCase(),
                        title: name.replace(/([a-z])([A-Z])/g, '$1 $2'),
                    },

                    digest: generateDigest(code),
                    filePath,
                    id: slug,
                });
            }

            watcher?.add(directory);
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
            const directory = 'src/content';
            const manifest: Problem[] = JSON.parse(
                fs.readFileSync(path.join(directory, 'problems.json'), 'utf-8'),
            );
            const problemMap = new Map(manifest.map(problem => [problem.id, problem]));

            store.clear();

            for (const difficulty of ['easy', 'medium', 'hard']) {
                const difficultyDirectory = path.join(directory, difficulty);

                if (!fs.existsSync(difficultyDirectory)) continue;

                for (const subdirectoryName of fs.readdirSync(difficultyDirectory)) {
                    const subdirectory = path.join(difficultyDirectory, subdirectoryName);

                    if (!fs.statSync(subdirectory).isDirectory()) continue;

                    for (const file of fs.readdirSync(subdirectory)) {
                        if (file.startsWith('.')) continue;

                        const extension = file.split('.').pop() ?? 'js';
                        const filePath = path.join(subdirectory, file);
                        const number = parseInt(file);

                        if (isNaN(number)) continue;

                        const code = fs.readFileSync(filePath, 'utf-8');
                        const problem = problemMap.get(number);

                        const commentMatch = code.match(/^(?:\/\/|--|#)\s*(\d+)\.\s*(.+)/);

                        let title = `Problem ${number}`;

                        if (commentMatch) {
                            title = `${commentMatch[1]}. ${commentMatch[2].trim()}`;
                        } else if (problem) {
                            title = `${problem.id}. ${problem.title}`;
                        }

                        store.set({
                            data: {
                                code,
                                difficulty,
                                lang: (extensionLabel[extension] ?? extension).toLowerCase(),
                                langLabel: extensionLabel[extension] ?? extension.toUpperCase(),
                                title,
                            },

                            digest: generateDigest(code),
                            filePath,
                            id: String(number),
                        });
                    }
                }
            }

            watcher?.add(path.join(directory, '{easy,medium,hard}/**/*'));
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
