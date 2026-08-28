import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import Footer from '../../src/sections/Footer.astro';

const AEPHONICS_URL = 'https://aephonics.com';

const year = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', year: 'numeric' }).format(new Date());

describe('Footer', () => {
    let html: string;

    beforeAll(async () => {
        const container = await AstroContainer.create();

        html = await container.renderToString(Footer);
    });

    test('renders exactly one footer landmark with its border and background chrome', () => {
        expect(html).toContain('<footer class="section border-t border-white-10 bg-zinc-950">');
        expect(html.split('<footer').length - 1).toBe(1);
    });

    test('renders the copyright entity ahead of the america/chicago year time element', () => {
        expect(html).toContain(`&copy; <time datetime="${year}">${year}</time>`);
    });

    test('links to aephonics in a new tab', () => {
        expect(html).toContain(`aria-label="Aephonics (opens in new tab)" href="${AEPHONICS_URL}" target="_blank"`);
        expect(html).toMatch(/target="_blank"[^>]*>\s*Aephonics\s*<\/a>/);
    });

    test('renders the all rights reserved copy', () => {
        expect(html).toContain('. All rights reserved.');
    });
});
