# CLAUDE.md
This is a file where we create site with blog.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

**Read `AGENTS.md` above before touching any App Router / routing / data-fetching code.** This project is pinned to Next.js 16.2.12, which is newer than most training data and has breaking changes vs. the Next.js you may expect. When in doubt about an API or convention, check `node_modules/next/dist/docs/01-app/` (the exact docs for the installed version) rather than relying on prior knowledge.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config, `eslint.config.mjs`)

No test framework is configured yet.

## Architecture

This is a fresh `create-next-app` scaffold (App Router, TypeScript, Tailwind CSS v4, React 19) — no blog-specific routes or content system exist yet.

- **Routing**: App Router under `src/app/`. Path alias `@/*` maps to `./src/*` (see `tsconfig.json`).
- **Styling**: Tailwind CSS v4, configured CSS-first — there is no `tailwind.config.ts`. Theme tokens (colors, fonts) are declared directly in `src/app/globals.css` via `@theme inline`, and `@tailwindcss/postcss` handles the build (`postcss.config.mjs`). Dark mode uses the `prefers-color-scheme` media query, not a class toggle.
- **Fonts**: Geist Sans/Mono are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`) consumed by the Tailwind theme in `globals.css`.
