import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, test } from 'vitest';

import Layout from '../../src/Layout.astro';
import config from '../../astro.config';
import { ROUTES } from '../../src/lib/constants';

import type { ComponentProps } from 'astro/types';

type LayoutProps = ComponentProps<typeof Layout>;

interface RenderOptions {
    params?: Record<string, string>;
    props?: Partial<LayoutProps>;
    routePattern?: string;
}

interface StructuredData {
    '@context': string;
    '@graph': {
        '@type': string;
        'author'?: { '@type': string; 'name': string };
        'inLanguage'?: string;
        'itemListElement'?: unknown[];
        'name'?: string;
        'url'?: string;
    }[];
}

const DESCRIPTION = 'Personal archive of LeetCode solutions and data structure implementations, written in six languages with copyable highlighted code.';
const SLOT = '<section data-slot="page">Slot content</section>';
const SLUG = 'two-sum';
const SOLUTION_PATTERN = '/p/[slug]';
const SOLUTION_TITLE = 'Two Sum \u2014 Algo';
const TITLE = 'Algo';

const site = String(config.site);

function getStructuredData(markup: string) {
    const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

    return JSON.parse(String(match?.[1])) as StructuredData;
}

async function renderLayout({ params, props, routePattern = '/' }: RenderOptions = {}) {
    const container = await AstroContainer.create({ astroConfig: { site } });

    return await container.renderToString(Layout, {
        params,
        partial: false,
        props: { description: DESCRIPTION, title: TITLE, ...props },
        request: new Request(new URL(routePattern, site)),
        slots: { default: SLOT },
    });
}

describe('Layout', () => {
    let html: string;
    let solutionHtml: string;

    beforeAll(async () => {
        html = await renderLayout();
        solutionHtml = await renderLayout({ params: { slug: SLUG }, props: { title: SOLUTION_TITLE }, routePattern: SOLUTION_PATTERN });
    });

    test('renders the full page skeleton', () => {
        expect(html).toContain('<!DOCTYPE html>');
        expect(html).toContain('<html lang="en">');
        expect(html).toContain('<head>');
        expect(html).toContain('</head>');
        expect(html).toContain('<body class="flex flex-col min-h-svh pt-(--header-height) antialiased bg-zinc-950 text-white">');
        expect(html).toContain('</body></html>');
    });

    test('declares the charset and viewport metas', () => {
        expect(html).toContain('<meta charset="utf-8">');
        expect(html).toContain('<meta content="width=device-width, initial-scale=1" name="viewport">');
    });

    test('renders the title prop as the document title', () => {
        expect(html).toContain(`<title>${TITLE}</title>`);
    });

    test('wires the description prop into meta tags', () => {
        expect(html).toContain(`<meta content="${DESCRIPTION}" name="description">`);
        expect(html).toContain(`<meta content="${DESCRIPTION}" property="og:description">`);
        expect(html).toContain(`<meta content="${DESCRIPTION}" name="twitter:description">`);
    });

    test('mirrors the title into social metas', () => {
        expect(html).toContain(`<meta content="${TITLE}" property="og:title">`);
        expect(html).toContain(`<meta content="${TITLE}" name="twitter:title">`);
    });

    test('renders canonical and site identity tags', () => {
        expect(html).toContain(`<link href="${site}/" rel="canonical">`);
        expect(html).toContain(`<meta content="${site}/" property="og:url">`);
        expect(html).toContain('<meta content="Algo" property="og:site_name">');
        expect(html).toContain('<meta content="en_US" property="og:locale">');
        expect(html).toContain('<meta content="website" property="og:type">');
        expect(html).toContain('<meta content="summary_large_image" name="twitter:card">');
        expect(html).toContain('<meta content="Kevin Huang" name="author">');
        expect(html).toContain('<meta content="#09090b" name="theme-color">');
    });

    test('resolves the canonical link from the route pattern and params', () => {
        expect(solutionHtml).toContain(`<link href="${site}/p/${SLUG}" rel="canonical">`);
        expect(solutionHtml).toContain(`<meta content="${site}/p/${SLUG}" property="og:url">`);
    });

    test('points the social image metas at og.png', () => {
        expect(html).toContain(`<meta content="${site}/og.png" property="og:image">`);
        expect(html).toContain(`<meta content="${site}/og.png" name="twitter:image">`);
    });

    test('allows indexing without the noindex prop', () => {
        expect(html).toContain('<meta content="index, follow" name="robots">');
        expect(html).not.toContain('noindex');
    });

    test('blocks indexing when the noindex prop is set', async () => {
        const noindexed = await renderLayout({ props: { noindex: true } });

        expect(noindexed).toContain('<meta content="noindex, nofollow" name="robots">');
        expect(noindexed).not.toContain('content="index, follow"');
    });

    test('links the favicon and touch icon', () => {
        expect(html).toContain('<link href="/apple-touch-icon.png" rel="apple-touch-icon">');
        expect(html).toContain('<link href="/favicon.svg" rel="icon" type="image/svg+xml">');
    });

    test('embeds valid json-ld describing the site', () => {
        const jsonLd = getStructuredData(html);

        const itemList = jsonLd['@graph'].find(node => node['@type'] === 'ItemList');
        const website = jsonLd['@graph'].find(node => node['@type'] === 'WebSite');

        expect(jsonLd['@context']).toBe('https://schema.org');

        expect(itemList?.itemListElement).toEqual(ROUTES.map((route, index) => ({
            '@type': 'SiteNavigationElement',
            'name': route.label,
            'position': index + 1,
            'url': `${site}${route.href}`,
        })));

        expect(website?.author).toEqual({ '@type': 'Person', 'name': 'Kevin Huang' });
        expect(website?.inLanguage).toBe('en');
        expect(website?.name).toBe('Algo');
        expect(website?.url).toBe(`${site}/`);
    });

    test('omits the breadcrumb list on the home route', () => {
        const breadcrumb = getStructuredData(html)['@graph'].find(node => node['@type'] === 'BreadcrumbList');

        expect(breadcrumb).toBeUndefined();
    });

    test('adds a breadcrumb list with two positioned items on a solution route', () => {
        const breadcrumb = getStructuredData(solutionHtml)['@graph'].find(node => node['@type'] === 'BreadcrumbList');

        expect(breadcrumb?.itemListElement).toEqual([
            { '@type': 'ListItem', 'item': `${site}/`, 'name': ROUTES[0].label, 'position': 1 },
            { '@type': 'ListItem', 'item': `${site}/p/${SLUG}`, 'name': SOLUTION_TITLE, 'position': 2 },
        ]);
    });

    test('enables the client router once', () => {
        expect(html).toContain('<meta name="astro-view-transitions-enabled" content="true">');
        expect(html).toContain('<meta name="astro-view-transitions-fallback" content="animate">');
        expect(html.split('ClientRouter.astro?astro&type=script').length - 1).toBe(1);
    });

    test('attaches exactly one page-load script hook', () => {
        expect(html.split('Layout.astro?astro&type=script').length - 1).toBe(1);
    });

    test('renders the navbar header and footer as body siblings of main', () => {
        expect(html).toContain('<header class="navbar fixed top-0 z-50 h-(--header-height) w-full border-b border-white-10 bg-zinc-950"');
        expect(html).toContain('<footer class="section border-t border-white-10 bg-zinc-950">');
        expect(html.indexOf('<header')).toBeGreaterThan(html.indexOf('<body'));
        expect(html.indexOf('<main')).toBeGreaterThan(html.indexOf('</header>'));
        expect(html.indexOf('<footer')).toBeGreaterThan(html.indexOf('</main>'));
        expect(html.indexOf('</footer>')).toBeLessThan(html.indexOf('</body>'));
    });

    test('renders slot content inside the main landmark', () => {
        expect(html).toContain('<main class="flex flex-1 flex-col">');
        expect(html).toContain(SLOT);
        expect(html.indexOf(SLOT)).toBeGreaterThan(html.indexOf('<main'));
        expect(html.indexOf(SLOT)).toBeLessThan(html.indexOf('</main>'));
    });
});
