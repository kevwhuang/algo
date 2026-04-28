import { getCollection } from 'astro:content';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const [dataStructures, problems] = await Promise.all([
        getCollection('dataStructures'),
        getCollection('problems'),
    ]);

    const index = [
        ...dataStructures.map(entry => ({
            difficulty: 'ds',
            id: entry.id,
            title: entry.data.title,
        })),
        ...problems.map(entry => ({
            difficulty: entry.data.difficulty[0],
            id: entry.id,
            title: entry.data.title,
        })),
    ];

    return new Response(JSON.stringify(index), {
        headers: { 'Content-Type': 'application/json' },
    });
};
