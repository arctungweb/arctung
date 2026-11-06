/**
 * Regenerate scripts/lastmod.json from git history.
 *
 * Why a committed file instead of reading git at build time: Cloudflare builds
 * from a shallow clone, where every file's newest commit IS the build commit.
 * Reading git there would stamp all 38 URLs with today's date on every deploy,
 * which is exactly the inflated lastmod that makes crawlers stop trusting it.
 *
 * So: regenerate locally before committing, keep the result in the repo, and let
 * CI reuse it. Local runs only ever move dates forward.
 *
 *   node scripts/gen-lastmod.mjs
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'scripts', 'lastmod.json');

function gitDates() {
  let out;
  try {
    out = execFileSync('git', ['log', '--format=@%cs', '--name-only', '--no-renames'], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024
    });
  } catch (err) {
    console.warn('[lastmod] git log failed, keeping existing file:', err.message);
    return new Map();
  }

  const map = new Map();
  let date = null;
  for (const raw of out.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('@')) {
      date = line.slice(1);
      continue;
    }
    const file = line.replace(/\\/g, '/');
    // First sighting wins: git log is newest-first.
    if (date && !map.has(file)) map.set(file, date);
  }
  return map;
}

const existing = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const fresh = gitDates();

const merged = { ...existing };
let added = 0;
let moved = 0;
for (const [file, date] of fresh) {
  if (!file.startsWith('src/')) continue;
  if (!existing[file]) added++;
  else if (existing[file] !== date) moved++;
  merged[file] = date;
}

const sorted = Object.fromEntries(Object.keys(merged).sort().map((k) => [k, merged[k]]));
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(sorted, null, 2) + '\n');

console.log(`[lastmod] ${Object.keys(sorted).length} files (${added} new, ${moved} updated)`);
