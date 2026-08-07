# Bitcoin Smiles

Free dental care in rural El Salvador, funded in Bitcoin by thousands of
strangers since 2021: [bitcoinsmiles.org](https://bitcoinsmiles.org).

Built with [Astro](https://astro.build). Fully static, no client-side framework.
Patient stories are plain Markdown files, so adding one is a copy-paste job.

## Run it locally

Needs Node 22.12+ (Node 24 LTS recommended, see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
```

`npm run build` writes the production site to `dist/`; `npm run preview` serves it.

## Add a patient

1. Copy `src/content/patients/_TEMPLATE.md` to `src/content/patients/<slug>.md`
   (the slug is the lowercase name, hyphens for spaces: `dona-paula.md`).
2. Fill in the frontmatter: `name`, `date` (YYYY-MM), `funding`, and `order`
   (one higher than the current highest so the story lands at the end of the list).
3. Add the photos, named after the slug:
   - `src/photos/after/<slug>.jpg` (required)
   - `src/photos/before/<slug>.jpg` (optional; when present, the story page
     shows a before/after comparison
4. `npm run dev` to check it. That's the whole job: the patients grid, the
   homepage photo wall, prev/next links, sitemap, and social preview cards all
   update themselves.

The build fails loudly if the frontmatter is malformed or the after-photo is
missing, so mistakes can't reach production.

## How it's organised

```
src/
  content/patients/   one Markdown file per patient (the only files most edits touch)
  photos/             before/, after/, supporters/, press/, site/
  pages/              index, patients/index, patients/[slug], 404
  layouts/Base.astro  shared head (fonts, SEO/social meta) + nav + footer
  styles/global.css   design tokens and the scroll-animation keyframes
```

Details worth knowing:

- **Images**: drop in a normal JPG; the build generates responsive WebP at
  several widths. Nothing to do by hand.
- **Fonts** are self-hosted (npm `@fontsource` packages), no Google Fonts
  requests, no third-party origins at all on first load.
- **Scroll animations** use CSS scroll-driven animations behind an
  `@supports (animation-timeline: view())` gate: browsers without support (and
  people with reduced-motion set) get the same page, just static.
- **The film** is a YouTube (privacy-enhanced domain) embed injected only when
  scrolled near, so the third-party player never blocks first load.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. One-time repository setup:

1. Settings → Pages → Source: **GitHub Actions**
2. Settings → Pages → Custom domain: `bitcoinsmiles.org`
   (the `public/CNAME` file keeps it across deploys; point the domain's DNS at
   GitHub Pages and enable Enforce HTTPS)

To host under `https://<user>.github.io/<repo>/` instead, see the note in
`astro.config.mjs`.
