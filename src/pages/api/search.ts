import { getCollection } from 'astro:content';

export async function GET(): Promise<Response> {
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
            difficulty: entry.data.difficulty,
            id: entry.id,
            title: entry.data.title,
        })),
    ];

    return new Response(JSON.stringify(index), {
        headers: { 'Content-Type': 'application/json' },
    });
}
