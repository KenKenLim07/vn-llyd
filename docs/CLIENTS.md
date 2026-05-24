# Multi-client setup

Photolio is a **template repo**: one codebase, many photographer sites. Each site is a separate Vercel deployment with different env vars and assets.

## How it works

```
NEXT_PUBLIC_CLIENT=vn-llyd
        │
        ▼
src/content/registry.ts  →  picks ClientDefinition
        │
        ▼
src/content/resolve-client.ts  →  siteConfig, projects, image URLs, …
        │
        ▼
src/lib/data.ts + images.ts  →  components import as before
```

- **`template`** — generic demo on `main` (stock photos in `public/portfolio/`)
- **`vn-llyd`** — ShutterStories / Vn Llyd (client assets in `public/clients/vn-llyd/`)

## Local development

```bash
cp .env.example .env.local
```

For Vn's site:

```env
NEXT_PUBLIC_CLIENT=vn-llyd
NEXT_PUBLIC_SITE_URL=https://shutterstories-photography.vercel.app
```

For the generic demo, omit `NEXT_PUBLIC_CLIENT` or set `template`.

## Cold outreach: new photographer

1. **Scaffold**

   ```bash
   ./scripts/new-client.sh sarah-chen "Sarah Chen" "Sarah Chen Photography"
   ```

2. **Assets**

   - `public/clients/sarah-chen/profile.jpg` — about portrait
   - `public/clients/sarah-chen/photos/*.jpg` — portfolio shots

3. **Config** — edit `src/content/clients/sarah-chen.ts`:
   - `site` — brand, name, tagline, social links, `defaultSiteUrl`
   - `images` — map keys to paths under `/clients/sarah-chen/…` or `/portfolio/…`
   - `workCategories`, `projects`, `galleryImages`, `testimonials`, `awards`, `about`

4. **Register** — in `src/content/registry.ts`:

   ```ts
   import { client as sarahChenClient } from "./clients/sarah-chen";

   export const CLIENT_IDS = ["template", "vn-llyd", "sarah-chen"] as const;

   const registry = {
     // ...
     "sarah-chen": sarahChenClient,
   };
   ```

5. **Deploy** — new Vercel project (or preview branch):

   ```env
   NEXT_PUBLIC_CLIENT=sarah-chen
   NEXT_PUBLIC_SITE_URL=https://sarah-chen-photography.vercel.app
   ```

6. **Send** — share the preview URL in outreach; promote to production when they sign.

## Image keys

Components reference logical keys (`hero`, `weddingA`, …). Each client maps keys to paths in `images`:

```ts
images: {
  hero: "/portfolio/hero.jpg",           // stock
  weddingA: photos("wedding.jpg"),       // client photo
},
```

After changing paths, run `npm run build` to verify all keys resolve.

## Hero variants

Set `sections.hero` in a client config to change layout without forking the repo:

| Variant | Best for | Client |
|---------|----------|--------|
| `cinematic` | Default full-screen parallax hero | template, vn-llyd |
| `aerial` | Drone / production — Ken Burns zoom, viewfinder overlay, blue CTAs | zyd-flores |

```ts
sections: {
  hero: {
    variant: "aerial",
    imageKey: "hero",
    eyebrow: "Photography · Drone · Production",
    primaryCta: { label: "View Aerial Work", href: "#work" },
  },
},
```

Add new variants in `src/components/hero/` and register them in `HeroSection.tsx`.

## Optional: client branch

You can keep long-lived branches like `client/vn-llyd` for client-specific experiments. Production still relies on `NEXT_PUBLIC_CLIENT` + Vercel env — branches are optional.

## Checklist before sending a demo

- [ ] Profile photo and portfolio images in `public/clients/<id>/`
- [ ] Copy and social links updated in client config
- [ ] Client registered in `registry.ts`
- [ ] Vercel env vars set
- [ ] `npm run build` passes
- [ ] Lighthouse / mobile spot-check on preview URL
