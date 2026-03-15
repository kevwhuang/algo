import { describe, expect, test } from 'vitest';

import { getExt, getRange } from '../../scripts/utils';

describe('getExt', () => {
    test('returns .js for free non-database problem', () => {
        expect(getExt({ database: false, difficulty: 'easy', id: 1, paid: false, slug: 'two-sum', title: 'Two Sum' })).toBe('.js');
    });

    test('returns .mjs for paid non-database problem', () => {
        expect(getExt({ database: false, difficulty: 'easy', id: 2, paid: true, slug: 'test', title: 'Test' })).toBe('.mjs');
    });

    test('returns .sql for free database problem', () => {
        expect(getExt({ database: true, difficulty: 'easy', id: 3, paid: false, slug: 'test', title: 'Test' })).toBe('.sql');
    });

    test('returns .p.sql for paid database problem', () => {
        expect(getExt({ database: true, difficulty: 'easy', id: 4, paid: true, slug: 'test', title: 'Test' })).toBe('.p.sql');
    });
});

describe('getRange', () => {
    test('returns 1-1000 for id 1', () => {
        expect(getRange(1)).toBe('1-1000');
    });

    test('returns 1-1000 for id 1000', () => {
        expect(getRange(1000)).toBe('1-1000');
    });

    test('returns 1001-2000 for id 1001', () => {
        expect(getRange(1001)).toBe('1001-2000');
    });

    test('returns 2001-3000 for id 2500', () => {
        expect(getRange(2500)).toBe('2001-3000');
    });
});
