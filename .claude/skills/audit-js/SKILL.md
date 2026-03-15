---
description: Enforce JavaScript/TypeScript code ordering and style conventions
user-invocable: true
---

Audit `.js`, `.mjs`, `.ts`, `.tsx` files and frontmatter (`---`) / `<script>` blocks in `.astro` files.
Skip `node_modules`, `dist`, `.astro` cache.

## Ordering

Reorder top-level declarations in this sequence. Alphabetize within each category.

1. **Imports** — three groups separated by blank lines: external, internal, types. Sort alphabetically by the imported binding name, ignoring braces (e.g. `{ defineConfig }` sorts as `defineConfig`)
2. **Types / Interfaces** — types before interfaces
3. **Constants** — static values known at definition time
4. **Variables** — derived or computed state
5. **Helpers** — internal utility functions
6. **Main logic** — primary functions and classes
7. **Exports** — `export` and `export default` at the very end

## Style

- Prefer `function` declarations over arrows (except inline callbacks, `this`-binding, or forward-reference needs)
- Clear, descriptive names — flag ambiguous or abbreviated identifiers
- Blank lines around block elements (functions, if/else, for/while, try/catch, classes)
- Blank lines between logical groups of statements
- 4-space indentation

## Rules

- No logic changes — reorder, rename, and reformat only
- Skip conforming files
- Must pass `bun run lint`
