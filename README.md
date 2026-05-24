# Photolio — Cinematic Photography Portfolio

A premium, editorial photography portfolio built with Next.js 16 (App Router), Tailwind CSS 4, TypeScript, and Framer Motion.

**Multi-client template:** one codebase, many deployments. Each photographer gets their own Vercel project and env vars — no forks required.

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
cp .env.example .env.local   # pick a client (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Multi-client workflow

| Env var | Purpose |
|---------|---------|
| `NEXT_PUBLIC_CLIENT` | Client config id (`template`, `vn-llyd`, …) |
| `NEXT_PUBLIC_SITE_URL` | Public URL for SEO / Open Graph |

- **`main` branch + no env** → generic `template` demo (stock photos)
- **Vn Llyd production** → `NEXT_PUBLIC_CLIENT=vn-llyd` on Vercel

See [docs/CLIENTS.md](docs/CLIENTS.md) for cold-outreach setup.

### Add a new client

```bash
chmod +x scripts/new-client.sh
./scripts/new-client.sh jane-doe "Jane Doe" "Jane Doe Photography"
```

Then register the client in `src/content/registry.ts`, add photos under `public/clients/jane-doe/`, and deploy.

### Asset layout

| Path | Purpose |
|------|---------|
| `public/portfolio/` | Shared stock placeholders (template demo) |
| `public/clients/<id>/profile.jpg` | About section portrait |
| `public/clients/<id>/photos/` | Client weddings, events, portraits |

Client configs live in `src/content/clients/<id>.ts`. The app resolves content via `src/content/resolve-client.ts`; `src/lib/data.ts` and `src/lib/images.ts` re-export the active client.

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
