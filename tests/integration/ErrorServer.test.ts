import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import ErrorServer from '../../src/sections/ErrorServer.astro';
import { CLASS_BUTTON, CLASS_ERROR_CODE } from '../../src/lib/constants';

describe('ErrorServer', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(ErrorServer);
    });

    test('labels the section by the status code heading', () => {
        expect(html).toContain('<section class="section flex items-center justify-center min-h-[calc(100svh-var(--header-height))]" aria-labelledby="error-server-title"');
        expect(html.split('id="error-server-title"').length - 1).toBe(1);
    });

    test('renders 500 with the shared error code treatment', () => {
        expect(html).toContain(`<h1 id="error-server-title" class="${CLASS_ERROR_CODE}">`);
        expect(html).toMatch(/id="error-server-title"[^>]*>\s*500\s*<\/h1>/);
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
