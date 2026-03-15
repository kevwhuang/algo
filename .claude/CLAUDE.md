# Algo

Algorithm and data structure solutions site at algo.aephonics.com. Displays LeetCode problems and DS implementations with syntax-highlighted code blocks. Built with Astro 6, TypeScript, Tailwind CSS 4, and GSAP. Deployed on Netlify.

## Commands

| Command         | Description              |
| --------------- | ------------------------ |
| `bun start`     | Dev server (port 8888)   |
| `bun run build` | Production build         |
| `bun run lint`  | tsc && eslint            |
| `bun test`      | vitest && playwright     |

## Structure

| Path                     | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `src/content/`           | Solution files ({easy,medium,hard}/, data-structures/) |
| `src/layouts/Base.astro` | Head, meta, navbar, footer, global styles              |
| `src/lib/scroll.ts`      | GSAP scroll animations (data-scroll)                   |
| `src/pages/`             | index, [slug] (solutions), [...slug] (404), api/       |
| `src/sections/`          | Events, Footer, Navbar, NotFound, Progress, Solution   |
