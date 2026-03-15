import { getCollection } from 'astro:content';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const [dataStructures, problems] = await Promise.all([
        getCollection('dataStructures'),
        getCollection('problems'),
    ]);

    const index = [
        ...dataStructures.map(ds => ({
            d: 'ds',
            i: ds.id,
            t: ds.data.title,
        })),
        ...problems.map(p => ({
            d: p.data.difficulty[0],
            i: p.id,
            t: p.data.title,
        })),
    ];

    return new Response(JSON.stringify(index), {
        headers: { 'Content-Type': 'application/json' },
    });
};
