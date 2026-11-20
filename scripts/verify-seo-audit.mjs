import fs from 'node:fs';
import { sourcesFor, lastmodFor } from './sitemap-lastmod.mjs';

const read = (path) => fs.readFileSync(path, 'utf8');
const decode = (s) => s.replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"');
const match = (html, re, label) => {
  const m = html.match(re);
  if (!m) throw new Error(`Missing ${label}`);
  return decode(m[1]);
};

const sitemap = read('dist/sitemap-0.xml');
const sitemapCount = (sitemap.match(/<loc>/g) || []).length;
const indexableHtml = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    if (entry.isDirectory()) walk(path);
    else if (entry.name === 'index.html' && !read(path).includes('noindex')) indexableHtml.push(path);
  }
};
walk('dist');
if (sitemapCount !== indexableHtml.length) {
  throw new Error(`Sitemap has ${sitemapCount} URLs but dist has ${indexableHtml.length} indexable pages`);
}

const lastmodMap = JSON.parse(read('scripts/lastmod.json'));
const guideFiles = fs.readdirSync('src/content/guides').filter((name) => name.endsWith('.md'));
const guidesMissingLastmod = guideFiles.filter((name) => !lastmodMap[`src/content/guides/${name}`]);
if (guidesMissingLastmod.length) throw new Error(`Guides missing lastmod: ${guidesMissingLastmod.join(', ')}`);

const redirects = read('dist/_redirects').split('\n').filter(Boolean);
const badRedirects = redirects.filter((line) => {
  const [from, to] = line.trim().split(/\s+/);
  return from && to && (from === to || from.includes('*') || to.includes('*'));
});
if (badRedirects.length) throw new Error(`Unsafe redirects: ${badRedirects.join(', ')}`);

const guideHtml = read('dist/guides/w75cu25-vs-w70cu30/index.html');
const guideTitle = match(guideHtml, /<title>(.*?)<\/title>/s, 'guide title');
if ([...guideTitle].length > 65) throw new Error(`Guide title too long: ${[...guideTitle].length}`);

const slugs = ['electrode-wheels-75-25', 'electrode-wheels-70-30', 'rods-blocks', 'threaded-electrodes', 'custom-parts'];
const productDescriptions = [];
for (const slug of slugs) {
  const html = read(`dist/products/${slug}/index.html`);
  const description = match(html, /<meta name="description" content="([^"]*)"/, `${slug} description`);
  if ([...description].length > 160) throw new Error(`${slug} description too long`);
  if (['rods-blocks', 'threaded-electrodes'].includes(slug) && description.includes('Max OD 400 mm')) {
    throw new Error(`${slug} still has unsupported max OD in meta description`);
  }
  if (!html.includes('https://arctung.com/#organization')) throw new Error(`${slug} missing Organization @id`);
  productDescriptions.push({ slug, length: [...description].length, description });
}

const testMap = {
  'src/pages/guides/[slug].astro': '2026-11-13',
  'src/content/guides/a.md': '2026-11-12',
  'src/data/products.ts': '2026-11-10'
};
if (!sourcesFor('/guides/a/').includes('src/pages/guides/[slug].astro')) throw new Error('Guide template dependency missing');
if (lastmodFor(testMap, 'https://arctung.com/guides/a/') !== '2026-11-13') throw new Error('Guide lastmod dependency failed');
if (lastmodFor(testMap, 'https://arctung.com/guides/') !== '2026-11-12') throw new Error('Guide index collection dependency failed');
if (lastmodFor(testMap, 'https://arctung.com/products/') !== '2026-11-10') throw new Error('Product index data dependency failed');

console.log(JSON.stringify({ sitemapCount, badRedirects, guideTitle, guideTitleLength: [...guideTitle].length, productDescriptions }, null, 2));
