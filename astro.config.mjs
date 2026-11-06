import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { lastmodFor } from './scripts/sitemap-lastmod.mjs';

// Read here, at config load, rather than inside the shared helper: the helper is
// also imported by page code, where the bundler would resolve its file paths
// against the output directory instead of scripts/.
const LASTMOD = JSON.parse(
  fs.readFileSync(new URL('./scripts/lastmod.json', import.meta.url), 'utf8')
);

export default defineConfig({
  site: 'https://arctung.com',
  integrations: [
    sitemap({
      // Without lastmod the sitemap gives Google no reason to re-crawl a page
      // sooner than its own schedule — which on this site was about once a month.
      serialize(item) {
        const lastmod = lastmodFor(LASTMOD, item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
