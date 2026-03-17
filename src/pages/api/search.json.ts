import { getCollection } from 'astro:content';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const [dataStructures, problems] = await Promise.all([
        getCollection('dataStructures'),
        getCollection('problems'),
    ]);

    const index = [
        ...dataStructures.map(entry => ({
            d: 'ds',
            i: entry.id,
            t: entry.data.title,
        })),
        ...problems.map(entry => ({
            d: entry.data.difficulty[0],
            i: entry.id,
            t: entry.data.title,
        })),
    ];

    return new Response(JSON.stringify(index), {
        headers: { 'Content-Type': 'application/json' },
    });
};
