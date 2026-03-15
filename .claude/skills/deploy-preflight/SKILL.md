---
description: Bump version, update packages, lint, test, build, and commit
user-invocable: true
---

Run in order. Stop on failure — do not commit partial work.

1. **Kill ports** — kill any processes on ports 8888 and 4321 if occupied
2. **Version** — set `version` in `package.json` to today's date as `YY.M.DD`
3. **Update** — `bun update`
4. **Lint** — `bun run lint` (fix issues)
5. **Test** — `bun run test` (not `bun test`, which runs bun's built-in test runner)
6. **Build** — `bun run build`
7. **Commit** — stage changed files and commit

## Commit format

`type: lowercase description`

Types: `chore` | `docs` | `feat` | `fix` | `refactor`

Concise. Do not push.
