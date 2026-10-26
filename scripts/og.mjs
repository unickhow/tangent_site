// Builds the Open Graph images (public/og-en.png, public/og-zh-tw.png) and the apple-touch icon
// from the app's mandarin facets. Needs rsvg-convert (brew install librsvg). Run: pnpm og
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const src = readFileSync(new URL('../src/components/brandMarkFacets.ts', import.meta.url), 'utf8');
const facets = [...src.matchAll(/\['([^']+)', '(#[0-9A-Fa-f]{6})'\]/g)].map((m) => [m[1], m[2]]);
const mark = facets.map(([d, f]) => `<path d="${d}" fill="${f}" stroke="${f}" stroke-width="0.4" stroke-linejoin="round"/>`).join('');

const cards = {
  en: { line1: 'Describe a part,', line2: 'get a real CAD model.', font: 'Helvetica Neue, Helvetica, Arial' },
  'zh-tw': { line1: '描述零件，', line2: '得到真正的 CAD 模型。', font: 'PingFang TC, Heiti TC, sans-serif' },
};

const tmp = mkdtempSync(join(tmpdir(), 'tangent-og-'));
const render = (svg, out, w, h) => {
  const file = join(tmp, 'in.svg');
  writeFileSync(file, svg);
  execFileSync('rsvg-convert', ['-w', String(w), '-h', String(h), file, '-o', out]);
};

for (const [locale, c] of Object.entries(cards)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1.3" fill="#2A1408" fill-opacity="0.16"/></pattern>
  <radialGradient id="glow" cx="0.25" cy="0.35" r="0.8"><stop offset="0" stop-color="#FFD2A6"/><stop offset="1" stop-color="#FFE6CC"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#glow)"/><rect width="1200" height="630" fill="url(#dots)"/>
  <svg x="80" y="150" width="330" height="330" viewBox="29 32 83 84">${mark}</svg>
  <text x="470" y="250" font-family="Helvetica Neue, Helvetica, Arial" font-weight="700" font-size="120" letter-spacing="-6" fill="#2A1408">Tangent</text>
  <text x="474" y="350" font-family="${c.font}" font-size="50" fill="#2A1408">${c.line1}</text>
  <text x="474" y="414" font-family="${c.font}" font-size="50" fill="#2A1408">${c.line2}</text>
  <text x="476" y="490" font-family="Menlo, monospace" font-size="22" letter-spacing="3" fill="#6B3A17">macOS</text>
</svg>`;
  render(svg, new URL(`../public/og-${locale}.png`, import.meta.url).pathname, 1200, 630);
}

const touch = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 140 140"><rect width="140" height="140" fill="#2A1408"/><svg x="14" y="12" width="112" height="112" viewBox="29 32 83 84">${mark}</svg></svg>`;
render(touch, new URL('../public/apple-touch-icon.png', import.meta.url).pathname, 180, 180);
console.log('Wrote og-en.png, og-zh-tw.png, apple-touch-icon.png');
