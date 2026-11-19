// Checks the built site (run `pnpm build` first) for the SEO and accessibility basics this site
// promises. Exits non-zero on the first page that breaks one.
import { readFileSync, existsSync } from 'node:fs';

const DOWNLOAD_HOST = 'https://download.nicraft.co/';
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
  // The saved theme is applied before first paint: the init script must sit in <head>, before <body>
  const head = html.slice(0, html.indexOf('<body'));
  check(/<script[^>]*data-theme-init[^>]*>[\s\S]*?localStorage[\s\S]*?<\/script>/.test(head), `${locale}: theme is applied by an inline script in <head>`);
  check(/<fieldset[^>]*data-theme-switch/.test(html) && (html.match(/name="theme"/g) ?? []).length === 3, `${locale}: theme switch offers three choices`);
  check(!/<img(?![^>]*\balt=)[^>]*>/.test(html), `${locale}: every <img> has alt`);
  check(![...html.matchAll(/<svg[^>]*role="img"[^>]*>/g)].some((m) => !/aria-label="[^"]+"/.test(m[0])), `${locale}: every role=img svg is labelled`);
  // The download is the installer of the release in public/updates (the manifest the app checks),
  // and nothing third-party loads with the page
  const latest = JSON.parse(readFileSync('public/updates/v0/latest.json', 'utf8'));
  const dmg = latest.platforms['darwin-aarch64'].url.replace(/\.app\.tar\.gz$/, '.dmg');
  check(dmg.endsWith(`/Tangent_${latest.version}_aarch64.dmg`) && dmg.startsWith(DOWNLOAD_HOST), `${locale}: installer is Tangent_${latest.version}_aarch64.dmg on ${DOWNLOAD_HOST} (the host the Privacy Policy names)`);
  check(html.includes(`href="${dmg}"`), `${locale}: download links to the installer of ${latest.version}`);
  check((html.match(/href="#get"/g) ?? []).length >= 2 && html.includes('id="get"'), `${locale}: calls to action point at the download`);
  check(!/tally|waitlist/i.test(html), `${locale}: no waitlist or Tally left`);
  check(!/<script[^>]*src="https?:/.test(html), `${locale}: no third-party script tag in the page`);
  check(html.includes(`href="https://bangs.nicraft.co${locale === 'en' ? '/' : '/zh-tw/'}"`), `${locale}: footer links Bangs in the same language`);
}
// Legal pages: their own title, description, canonical and hreflang; the contact address; linked
// from every page's footer.
const legal = ['privacy', 'terms'].flatMap((doc) => [[`en ${doc}`, `dist/${doc}/index.html`, `/${doc}/`], [`zh-tw ${doc}`, `dist/zh-tw/${doc}/index.html`, `/zh-tw/${doc}/`]]);
for (const [name, file, path] of legal) {
  const html = existsSync(file) ? readFileSync(file, 'utf8') : '';
  check(html, `${file} exists`);
  const title = one(html, /<title>([^<]+)<\/title>/);
  const description = one(html, /<meta name="description" content="([^"]+)"/);
  check(title && !seen.title.has(title), `${name}: unique <title>`);
  check(description && !seen.description.has(description) && description.length <= 160, `${name}: unique meta description ≤ 160 chars`);
  seen.title.add(title); seen.description.add(description);
  check(new RegExp(`<link rel="canonical" href="https?://[^"]+${path}"`).test(html), `${name}: canonical URL`);
  for (const code of ['en', 'zh-TW', 'x-default']) check(html.includes(`hreflang="${code}"`), `${name}: hreflang ${code}`);
  check((html.match(/<h1[\s>]/g) ?? []).length === 1, `${name}: exactly one <h1>`);
  check(!html.includes('application/ld+json'), `${name}: no home-page JSON-LD`);
  check(html.includes('contact@nicraft.co'), `${name}: contact address`);
}
for (const [locale, file] of [...Object.entries(pages), ...legal.map(([n, f]) => [n, f])]) {
  const html = readFileSync(file, 'utf8');
  const base = locale.startsWith('zh-tw') ? '/zh-tw/' : '/';
  check(html.includes(`href="${base}privacy/"`) && html.includes(`href="${base}terms/"`) && html.includes('mailto:contact@nicraft.co'), `${locale}: footer links to privacy, terms and contact`);
  check(html.includes('© 2026 Nicraft.'), `${locale}: footer credits Nicraft`);
}
for (const f of ['dist/robots.txt', 'dist/sitemap-index.xml', 'dist/sitemap-0.xml', 'dist/og-en.png', 'dist/og-zh-tw.png']) check(existsSync(f), `${f} exists`);
check(readFileSync('dist/sitemap-0.xml', 'utf8').includes('hreflang="zh-TW"'), 'sitemap lists hreflang alternates');

// The installer must really be there: a release published without --dmg would leave a dead button.
// Offline is a warning, not a failure; a 404 or the wrong type is a failure.
{
  const latest = JSON.parse(readFileSync('public/updates/v0/latest.json', 'utf8'));
  const dmg = latest.platforms['darwin-aarch64'].url.replace(/\.app\.tar\.gz$/, '.dmg');
  try {
    const res = await fetch(dmg, { method: 'HEAD', signal: AbortSignal.timeout(10000) });
    check(res.ok && res.headers.get('content-type') === 'application/x-apple-diskimage', `installer is downloadable: ${dmg} (${res.status} ${res.headers.get('content-type')})`);
  } catch {
    console.warn(`! couldn't reach ${dmg}; the installer was not verified`);
  }
}

process.exit(failed ? 1 : 0);
