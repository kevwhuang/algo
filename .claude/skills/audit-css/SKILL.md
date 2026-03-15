---
description: Enforce CSS and Tailwind conventions
user-invocable: true
---

Audit `.css` files and `<style>` blocks in `.astro` files.
Skip `node_modules`, `dist`, `.astro` cache.

## Property Order

Alphabetize all properties within a block. No blank lines between properties. Vendor prefixes last.

```css
.block {
    background: red;
    border: 1px solid gray;
    border-radius: 0.5rem;
    color: white;
    display: flex;
    font-size: 1rem;
    height: 100%;
    margin: 0;
    padding: 1rem;
    position: relative;
    transition: color 0.3s;
}
```

## Block Order

Sort declaration blocks by selector type in this precedence order, then alphabetize selectors within each group:

1. **Element / `:root`** — `html`, `body`, `:root`
2. **Class** — `.block`, `.block__element`, `.block--modifier`
3. **Pseudo-class** — `.block:hover`, `.block:focus`, `.block:first-child`
4. **Pseudo-element** — `.block::before`, `.block::after`, `::-webkit-scrollbar`
5. **`:global()`** — `:global(pre)`, `:global(.line)`
6. **`@media` / `@keyframes`** — media queries, keyframes at the end

Within a parent selector's nested rules, follow the same precedence order.

## Naming

BEM convention: `.block`, `.block__element`, `.block--modifier`.
No bare tag selectors for custom styles (`:global()` scoped selectors are acceptable).

## Formatting

- 4-space indentation
- Blank lines between `@keyframes` blocks
- No duplicate properties
- No deprecated properties — use modern equivalents
- Remove unused rules
- Minimize `@apply` — prefer inline utilities

## Tailwind Classes

Order logically:

1. **Custom/BEM** — `navbar`, `card__title`
2. **Group/state** — `group`, `peer`, `block`, `hidden`
3. **Position/layout** — `fixed`, `absolute`, `relative`, `flex`, `grid`, `items-*`, `justify-*`
4. **Stacking** — `z-*`
5. **Sizing** — `w-*`, `h-*`, `min-*`, `max-*`, `shrink-0`
6. **Spacing** — `p-*`, `px-*`, `py-*`, `m-*`, `gap-*`
7. **Borders** — `rounded-*`, `border`, `border-*`
8. **Typography** — `font-*`, `text-*` (size), `uppercase`, `tracking-*`, `leading-*`
9. **Colors** — `bg-*`, `text-*` (color), `placeholder-*`
10. **Effects** — `overflow-*`, `opacity-*`, `-translate-*`, `backdrop-blur-*`, `shadow-*`
11. **Interactions** — `transition-*`, `duration-*`, `outline-none`, `pointer-events-*`, `select-none`, `cursor-*`
12. **Responsive** — `sm:*`, `md:*`, `lg:*`

No duplicate classes. Prefer Tailwind over custom CSS.

## Rules

- No logic changes — reorder and clean up only
- Skip conforming files
