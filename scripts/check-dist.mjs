// Checks the built site (run `pnpm build` first) for the SEO and accessibility basics this site
// promises. Exits non-zero on the first page that breaks one.
import { readFileSync, existsSync } from 'node:fs';

const pages = { en: 'dist/index.html', 'zh-tw': 'dist/zh-tw/index.html' };
const seen = { title: new Set(), description: new Set() };
let failed = 0;
const check = (ok, msg) => { if (!ok) { failed++; console.error('✗ ' + msg); } else console.log('✓ ' + msg); };
const one = (html, re) => (html.match(re) ?? [])[1];

for (const [locale, file] of Object.entries(pages)) {
  const html = readFileSync(file, 'utf8');
  const title = one(html, /<title>([^<]+)<\/title>/);
  const description = one(html, /<meta name="description" content="([^"]+)"/);
  check(title && !seen.title.has(title), `${locale}: unique <title>`);
  check(description && !seen.description.has(description), `${locale}: unique meta description`);
  seen.title.add(title); seen.description.add(description);
  check(/<html lang="(en|zh-Hant-TW)"/.test(html), `${locale}: <html lang>`);
  check(/<link rel="canonical" href="https?:\/\/[^"]+\/"/.test(html), `${locale}: canonical URL`);
  for (const code of ['en', 'zh-TW', 'x-default']) check(html.includes(`hreflang="${code}"`), `${locale}: hreflang ${code}`);
  for (const p of ['og:title', 'og:description', 'og:image', 'og:url', 'og:locale']) check(html.includes(`property="${p}"`), `${locale}: ${p}`);
  for (const n of ['twitter:card', 'twitter:image']) check(html.includes(`name="${n}"`), `${locale}: ${n}`);
  const ld = one(html, /<script type="application\/ld\+json">(.+?)<\/script>/);
  check(ld && JSON.parse(ld)['@type'] === 'SoftwareApplication', `${locale}: SoftwareApplication JSON-LD`);
  check((html.match(/<h1[\s>]/g) ?? []).length === 1, `${locale}: exactly one <h1>`);
  check(!/<img(?![^>]*\balt=)[^>]*>/.test(html), `${locale}: every <img> has alt`);
  check(![...html.matchAll(/<svg[^>]*role="img"[^>]*>/g)].some((m) => !/aria-label="[^"]+"/.test(m[0])), `${locale}: every role=img svg is labelled`);
  const downloads = [...html.matchAll(/<button[^>]*data-placeholder="download"[^>]*>/g)];
  check(downloads.length >= 2 && downloads.every((m) => !/href=/.test(m[0])), `${locale}: Download buttons are placeholders with no href`);
}
for (const f of ['dist/robots.txt', 'dist/sitemap-index.xml', 'dist/sitemap-0.xml', 'dist/og-en.png', 'dist/og-zh-tw.png']) check(existsSync(f), `${f} exists`);
check(readFileSync('dist/sitemap-0.xml', 'utf8').includes('hreflang="zh-TW"'), 'sitemap lists hreflang alternates');

process.exit(failed ? 1 : 0);
