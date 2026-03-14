import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
    const [problems, dataStructures] = await Promise.all([
        getCollection('problems'),
        getCollection('dataStructures'),
    ]);

    const index = [
        ...problems.map(p => ({
            d: p.data.difficulty[0],
            i: p.id,
            t: p.data.title,
        })),
        ...dataStructures.map(ds => ({
            d: 'ds',
            i: ds.id,
            t: ds.data.title,
        })),
    ];

    return new Response(JSON.stringify(index), {
        headers: { 'Content-Type': 'application/json' },
    });
};
