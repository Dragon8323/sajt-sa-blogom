# 🐾 Pet Corner

A simple, database-free blog about life with pets — dogs, cats, and everything in between. Built
with the [Next.js](https://nextjs.org) App Router, written in Markdown.

## Features

- **Home** — full-bleed hero, latest posts in a responsive grid
- **Blog** — all posts with tag filtering (`/blog?tag=Dogs`)
- **Post pages** — image hero, statically generated at build time
- **About** — a short bio page
- No database, no CMS, no admin panel — content lives in the repo as Markdown files

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config, no `tailwind.config.ts`)
- [`gray-matter`](https://github.com/jonschlinkert/gray-matter) + [`remark`](https://github.com/remarkjs/remark) for parsing and rendering Markdown posts

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Writing a new post

Add a Markdown file to `content/posts/`. The filename becomes the URL slug:

```md
---
title: "Your Post Title"
date: "2026-08-10"
description: "One-line summary shown on the blog listing."
tags: ["Dogs", "Care"]
coverImage: "/posts/your-post-title.jpg"
---

Post content goes here, in plain Markdown.
```

- `coverImage` is optional — if set, drop the matching image in `public/posts/`.
- `tags` are used for filtering on the `/blog` page and shown in the footer.

Commit and push — the site rebuilds and redeploys automatically on Vercel.

## Project structure

```
content/posts/        Markdown blog posts
public/posts/         Post cover images
src/app/               Routes (Home, About, Blog, Blog post)
src/components/        Header, Footer, Hero, PostCard, etc.
src/lib/posts.ts       Markdown parsing + post/tag helpers
```

## Deployment

Deployed on [Vercel](https://vercel.com) — every push to `main` triggers an automatic rebuild.
