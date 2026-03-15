# Algo

Algorithm and data structure solutions site at algo.aephonics.com. Displays LeetCode problems and DS implementations with syntax-highlighted code blocks. Built with Astro 6, TypeScript, Tailwind CSS 4, and GSAP. Deployed on Netlify.

## Commands

| Command         | Description             |
| --------------- | ----------------------- |
| `bun run build` | Production build        |
| `bun run lint`  | tsc && eslint           |
| `bun run test`  | vitest && playwright    |
| `bun start`     | Dev server on port 8888 |

## Structure

| Path                     | Description                        |
| ------------------------ | ---------------------------------- |
| `src/components/`        | Icons                              |
| `src/content/`           | Solutions by difficulty and DS     |
| `src/content.config.ts`  | Content collections                |
| `src/layouts/Base.astro` | Head, meta, navbar, footer, styles |
| `src/lib/scroll.ts`      | GSAP scroll animations             |
| `src/middleware.ts`      | Request middleware                 |
| `src/pages/`             | Index, slug routes, 404, API       |
| `src/sections/`          | Page sections                      |
