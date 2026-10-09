# Legacy Wash Pros — Astro site

Marketing site for Legacy Wash Pros (pressure & soft washing, Joplin, MO). Built with [Astro](https://astro.build), static output, no UI framework, no forms — every call to action is a phone call or text.

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serve the production build locally
```

Requires Node 18.20+ (Node 20 LTS recommended).

## Pages

| URL | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about/` | `src/pages/about.astro` |
| `/services/` | `src/pages/services/index.astro` |
| `/services/concrete-washing/` … `/services/window-washing/` | `src/pages/services/[slug].astro` (generated from `src/data/services.ts`) |
| `/our-work/` | `src/pages/our-work.astro` |
| `/contact/` | `src/pages/contact.astro` |

## Where to edit things

- **Phone, email, Facebook, service area, hours, nav:** `src/data/site.ts`
- **Service pages (copy, photos, reviews):** `src/data/services.ts` — add an entry here to create a new service page automatically.
- **Reviews:** `src/data/reviews.ts`
- **Gallery & home "Recent Jobs" photos:** `src/data/gallery.ts`
- **Colors, buttons, type:** `src/styles/global.css` (design tokens at the top)
- **Shared pieces:** `src/components/` — `Header`, `Footer`, `CtaBand`, `PageHero`, `WaveLines`, `HowItWorks`, `Icon`, `Stars`
- **Images:** `public/images/`

## Before launch

- [ ] **Business hours:** replace the placeholder in `src/data/site.ts`.
- [ ] **Service-page copy:** draft copy in `src/data/services.ts` — have Ryan confirm the details (e.g. roof method, fence "both sides", recurring window service).
- [ ] Confirm whether gutter cleaning should get its own service page.
- [ ] Add a Google Business Profile link to `sameAs` in `src/layouts/BaseLayout.astro` once available.

## SEO

- Every page has a unique `<title>`, meta description, canonical URL and Open Graph tags (`src/layouts/BaseLayout.astro`).
- Each H1 targets "[service] in Joplin, MO".
- LocalBusiness JSON-LD on every page, plus Service and BreadcrumbList schema on service pages.
- `@astrojs/sitemap` generates `sitemap-index.xml`; `public/robots.txt` points to it.
