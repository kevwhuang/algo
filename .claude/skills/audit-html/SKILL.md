---
description: Enforce HTML and Astro markup conventions
user-invocable: true
---

Audit `.astro` and `.html` files.
Skip `node_modules`, `dist`, `.astro` cache.

## Attributes

Order on every element:

1. `id`
2. `class` (or `class:list`)
3. Remaining attributes alphabetically

## Markup

- Semantic elements (`nav`, `main`, `section`, `article`, `header`, `footer`, `aside`) over `div`/`span`
- Self-closing void elements (`<img />`, `<input />`, `<br />`)
- No blank lines between elements
- 4-space indentation
- Accessible: `alt` on images, `aria-label`/`aria-labelledby` where needed, no skipped heading levels

## Rules

- No logic changes — reorder attributes and fix markup only
- Skip conforming files
