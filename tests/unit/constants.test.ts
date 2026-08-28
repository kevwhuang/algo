import { describe, expect, expectTypeOf, test } from 'vitest';

import { CLASS_BUTTON, CLASS_ERROR_CODE, DIFFICULTIES, MEETUP_URL, ROUTES } from '../../src/lib/constants';

const CLASS_STRINGS = [
    ['CLASS_BUTTON', CLASS_BUTTON],
    ['CLASS_ERROR_CODE', CLASS_ERROR_CODE],
] as const;

const PROPERTY_STEMS = [
    ['bg-', 'background-color'],
    ['border-', 'border-color'],
    ['text-shadow-', 'text-shadow'],
    ['text-', 'color'],
] as const;

const STATE_PREFIXES = ['active:', 'focus-visible:', 'hover:'] as const;

function getChangedProperty(utility: string): string {
    return PROPERTY_STEMS.find(([stem]) => utility.startsWith(stem))?.[1] ?? utility;
}

function getStateUtilities(value: string): string[] {
    return value
        .split(' ')
        .filter(utility => STATE_PREFIXES.some(prefix => utility.startsWith(prefix)))
        .map(utility => utility.slice(utility.indexOf(':') + 1));
}

function getTransitionProperties(value: string): string[] {
    const utility = value.split(' ').find(candidate => candidate.startsWith('transition-['));

    return utility?.slice('transition-['.length, -1).split(',') ?? [];
}

describe('CLASS_BUTTON', () => {
    test('covers the hover, focus-visible, and active states', () => {
        const utilities = CLASS_BUTTON.split(' ');

        for (const prefix of STATE_PREFIXES) {
            expect(utilities.some(utility => utility.startsWith(prefix)), prefix).toBe(true);
        }
    });

    test('transitions exactly the properties its states change', () => {
        const changed = [...new Set(getStateUtilities(CLASS_BUTTON).map(getChangedProperty))].sort();
        const transitioned = getTransitionProperties(CLASS_BUTTON).sort();

        expect(getChangedProperty('bg-white-20')).toBe('background-color');
        expect(transitioned).toEqual(changed);
    });
});

describe('DIFFICULTIES', () => {
    test('lists easy, medium, and hard in ascending tier order', () => {
        expect(DIFFICULTIES).toEqual(['easy', 'medium', 'hard']);
    });

    test('is a readonly tuple of lowercase names', () => {
        expectTypeOf(DIFFICULTIES).toEqualTypeOf<readonly ['easy', 'medium', 'hard']>();

        for (const difficulty of DIFFICULTIES) {
            expect(difficulty, difficulty).toBe(difficulty.toLowerCase());
        }
    });
});

describe('MEETUP_URL', () => {
    test('is an https meetup.com url without a trailing slash', () => {
        const url = new URL(MEETUP_URL);

        expect(url.hostname).toBe('www.meetup.com');
        expect(url.protocol).toBe('https:');
        expect(MEETUP_URL.endsWith('/')).toBe(false);
    });
});

describe('ROUTES', () => {
    test('starts with the home route', () => {
        expect(ROUTES[0]).toEqual({ href: '/', label: 'Home' });
    });

    test('gives every route a slash-prefixed unique href and a non-empty label', () => {
        const hrefs = ROUTES.map(route => route.href);

        for (const route of ROUTES) {
            expect(route.href.startsWith('/'), route.label).toBe(true);
            expect(route.label.trim(), route.href).not.toBe('');
        }

        expect(new Set(hrefs).size).toBe(ROUTES.length);
    });
});

describe('class strings', () => {
    test('are non-empty single-space-separated utility lists', () => {
        for (const [name, value] of CLASS_STRINGS) {
            expect(value, name).not.toBe('');

            for (const utility of value.split(' ')) {
                expect(utility, name).not.toBe('');
            }
        }
    });

    test('contain no duplicate utilities', () => {
        for (const [name, value] of CLASS_STRINGS) {
            const utilities = value.split(' ');

            expect(new Set(utilities).size, name).toBe(utilities.length);
        }
    });
});
