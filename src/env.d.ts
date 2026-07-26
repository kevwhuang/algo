/// <reference types="astro/client" />

declare module 'eslint-plugin-jsx-a11y';

interface ImportMetaEnv {
    readonly SUPABASE_PUBLISHABLE_KEY: string;
    readonly SUPABASE_URL: string;
}

interface Problem {
    database: boolean;
    difficulty: string;
    id: number;
    paid: boolean;
    slug: string;
    title: string;
}
