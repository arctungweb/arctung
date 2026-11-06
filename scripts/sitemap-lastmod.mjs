/**
 * Map a sitemap URL to the newest date among the source files that actually
 * produce it, using scripts/lastmod.json (see gen-lastmod.mjs for why it is a
 * committed file rather than a git call at build time).
 *
 * Deliberately ignores shared chrome (layout, header, global.css). Touching the
 * CSS does not mean a guide's content changed, and stamping every URL with the
 * same date on every deploy is the pattern Google learns to discount.
 */
import fs from 'node:fs';

const DATA = JSON.parse(
  fs.readFileSync(new URL('./lastmod.json', import.meta.url), 'utf8')
);

const GUIDE = /^\/guides\/([a-z0-9-]+)$/;
const PRODUCT = /^\/products\/[a-z0-9-]+$/;
const APPLICATION = /^\/applications\/[a-z0-9-]+$/;

function sourcesFor(pathname) {
  const p = pathname.replace(/\/+$/, '');
  const out = [];

  if (p === '') out.push('src/pages/index.astro');
  else out.push(`src/pages${p}.astro`, `src/pages${p}/index.astro`);

  const guide = p.match(GUIDE);
  if (guide) out.push(`src/content/guides/${guide[1]}.md`);
  if (PRODUCT.test(p)) out.push('src/data/products.ts');
  if (APPLICATION.test(p)) out.push('src/data/applications.ts');

  return out;
}

export function lastmodFor(url) {
  let pathname;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return undefined;
  }

  let newest = '';
  for (const file of sourcesFor(pathname)) {
    const date = DATA[file];
    if (date && date > newest) newest = date;
  }
  return newest || undefined;
}
