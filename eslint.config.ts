import a11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import ts from 'typescript-eslint';

import content from './eslint.content.ts';

const contentIgnore = {
    ignores: ['src/content/**'],
};

const ignores = {
    ignores: ['.astro/', '.netlify/', 'dist/'],
};

const overrides = {
    files: ['**/*.astro', '**/*.astro/*.ts'],
    languageOptions: { globals: {} },
    rules: {
        '@stylistic/jsx-one-expression-per-line': 'off',
        '@stylistic/operator-linebreak': 'off',
    },
};

const style = stylistic.configs.customize({
    braceStyle: '1tbs',
    indent: 4,
    quotes: 'single',
    semi: true,
});

const base = [
    js.configs.recommended,
    style,
    ...ts.configs.recommended,
    ...astro.configs.recommended,
    a11y.flatConfigs.recommended,
];

export default [
    ignores,
    ...base.map(config => ({ ...config, ...contentIgnore })),
    overrides,
    ...content,
];
