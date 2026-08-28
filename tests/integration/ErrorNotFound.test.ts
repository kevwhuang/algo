import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import ErrorNotFound from '../../src/sections/ErrorNotFound.astro';
import { CLASS_BUTTON, CLASS_ERROR_CODE } from '../../src/lib/constants';

describe('ErrorNotFound', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(ErrorNotFound);
    });

    test('labels the section by the status code heading', () => {
        expect(html).toContain('<section class="section flex items-center justify-center min-h-[calc(100svh-var(--header-height))]" aria-labelledby="error-not-found-title"');
        expect(html.split('id="error-not-found-title"').length - 1).toBe(1);
    });

    test('renders 404 with the shared error code treatment', () => {
        expect(html).toContain(`<h1 id="error-not-found-title" class="${CLASS_ERROR_CODE}">`);
        expect(html).toMatch(/id="error-not-found-title"[^>]*>\s*404\s*<\/h1>/);
    });

    test('links back to home with the shared button treatment', () => {
        expect(html).toContain(`<a class="${CLASS_BUTTON}" aria-label="Return to home" href="/">`);
        expect(html).toMatch(/href="\/"[^>]*>\s*Return\s*<\/a>/);
    });

    test('renders exactly one unselectable scroll reveal shell', () => {
        expect(html).toContain('<div class="shell text-center select-none" data-scroll>');
        expect(html.split('data-scroll').length - 1).toBe(1);
    });
});
