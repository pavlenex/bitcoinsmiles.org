// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Deployed to GitHub Pages under a custom domain (public/CNAME).
  // If you ever serve it from https://<user>.github.io/<repo>/ instead,
  // set `site` accordingly and add `base: '/<repo>'`, then delete public/CNAME.
  site: 'https://bitcoinsmiles.org',
  integrations: [sitemap()],
  prefetch: true,
  // The standalone patients index was folded into the homepage as "The smiles".
  redirects: { '/patients': '/#smiles' },
  vite: {
    build: {
      // Lightning CSS (the default minifier) folds `animation-timeline` into
      // the `animation` shorthand, which browsers reject — silently killing
      // every scroll-driven animation. esbuild minifies conservatively.
      cssMinify: 'esbuild',
    },
  },
});
