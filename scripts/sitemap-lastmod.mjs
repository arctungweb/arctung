/**
 * Map a sitemap URL to the newest date among the source files that actually
 * produce it, using the map in scripts/lastmod.json (see gen-lastmod.mjs for
 * why that is a committed file rather than a git call at build time).
 *
 * Deliberately ignores shared chrome (layout, header, global.css). Touching the
 * CSS does not mean a guide's content changed, and stamping every URL with the
 * same date on every deploy is the pattern Google learns to discount.
 *
 * The map is passed in rather than read here: astro.config loads it from disk
 * while pages import the JSON through Vite. One pure function serves both and
 * no bundled page ever touches the filesystem.
 */

const GUIDE = /^\/guides\/([a-z0-9-]+)$/;
const PRODUCT = /^\/products\/[a-z0-9-]+$/;
const APPLICATION = /^\/applications\/[a-z0-9-]+$/;

export function sourcesFor(pathname) {
  const p = pathname.replace(/\/+$/, '');
  const out = [];

  if (p === '') out.push('src/pages/index.astro', 'src/data/products.ts', 'src/data/applications.ts');
  else out.push(`src/pages${p}.astro`, `src/pages${p}/index.astro`);

  const guide = p.match(GUIDE);
  if (guide) out.push('src/pages/guides/[slug].astro', `src/content/guides/${guide[1]}.md`);
  if (PRODUCT.test(p)) out.push('src/pages/products/[slug].astro', 'src/data/products.ts');
  if (APPLICATION.test(p)) out.push('src/pages/applications/[slug].astro', 'src/data/applications.ts');
  if (p === '/products') out.push('src/data/products.ts');
  if (p === '/applications') out.push('src/data/applications.ts');

  return out;
}

export function lastmodFor(map, url) {
  let pathname;
  try {
    pathname = new URL(url).pathname;
  } catch {
    return undefined;
  }

  const files = sourcesFor(pathname);
  const p = pathname.replace(/\/+$/, '');

  // The home page and guide index render collection-derived counts/lists. A
  // new or edited guide therefore changes those pages even though Astro has no
  // single source file representing the collection.
  if (p === '' || p === '/guides') {
    files.push(...Object.keys(map).filter((file) => file.startsWith('src/content/guides/')));
  }

  let newest = '';
  for (const file of files) {
    const date = map[file];
    if (date && date > newest) newest = date;
  }
  return newest || undefined;
}
