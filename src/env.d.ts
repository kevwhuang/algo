/// <reference types="astro/client" />

declare module 'eslint-plugin-jsx-a11y';

interface Problem {
    database: boolean;
    difficulty: string;
    id: number;
    paid: boolean;
    slug: string;
    title: string;
}
