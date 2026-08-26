import { getCollection } from 'astro:content';

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const [dataStructures, problems] = await Promise.all([
        getCollection('dataStructures'),
        getCollection('problems'),
    ]);

    const index = [
        ...dataStructures.map(entry => ({ difficulty: 'ds', id: entry.id, title: entry.data.title })),
        ...problems
            .sort((a, b) => Number(a.id) - Number(b.id))
            .map(entry => ({ difficulty: entry.data.difficulty, id: entry.id, title: entry.data.title })),
    ];

    return Response.json(index);
};
