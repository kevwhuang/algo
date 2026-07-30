import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import Footer from '../../src/sections/Footer.astro';

describe('Footer', () => {
    test('renders as footer element', async () => {
        const container = await AstroContainer.create();

        const html = await container.renderToString(Footer);

        expect(html).toMatch(/<footer[\s>]/);
    });

    test('renders copyright with current year', async () => {
        const container = await AstroContainer.create();

        const html = await container.renderToString(Footer);
        const year = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year: 'numeric' }).format(new Date());

        expect(html).toContain(`&copy; <time datetime="${year}">${year}</time>`);
    });

    test('renders Aephonics link', async () => {
        const container = await AstroContainer.create();

        const html = await container.renderToString(Footer);

        expect(html).toContain('href="https://aephonics.com"');
        expect(html).toContain('Aephonics');
    });
});
