# Photolio — Cinematic Photography Portfolio

A premium, editorial photography portfolio built with Next.js 16 (App Router), Tailwind CSS 4, TypeScript, and Framer Motion.

## Features

- Full-screen cinematic hero with parallax
- Floating navbar with scroll blur
- Featured work collections with alternating layouts
- Editorial project case studies
- Masonry gallery with lightbox
- About, testimonials, awards timeline
- Contact form and social links
- SEO: metadata, OpenGraph, Twitter cards, JSON-LD, sitemap, robots

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `src/lib/data.ts` for copy, projects, and contact details.

### Replace photos

| Folder | Purpose |
|--------|---------|
| `public/portfolio/` | Hero, travel, street, and other placeholder shots |
| `public/clients-photos/` | Client weddings, events, and portraits |
| `public/client-profile/` | About section portrait (`vn-llyd.jpg`) |

Drop in new JPGs using the **same filenames** — no code changes needed. Image keys are mapped in `src/lib/images.ts`.

To re-fetch Unsplash placeholders: `./scripts/download-portfolio-images.sh`

### Vercel

Set environment variable:

```
NEXT_PUBLIC_SITE_URL=https://shutterstories-photography.vercel.app
```

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- TypeScript
- Framer Motion
- Lucide React

## Build

```bash
npm run build
npm start
```
# vn-llyd
