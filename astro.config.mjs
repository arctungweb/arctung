import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { lastmodFor } from './scripts/sitemap-lastmod.mjs';

export default defineConfig({
  site: 'https://arctung.com',
  integrations: [
    sitemap({
      // Without lastmod the sitemap gives Google no reason to re-crawl a page
      // sooner than its own schedule — which on this site was about once a month.
      serialize(item) {
        const lastmod = lastmodFor(item.url);
        if (lastmod) item.lastmod = lastmod;
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
