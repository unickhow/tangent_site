// Builds the Open Graph images (public/og-en.png, public/og-zh-tw.png) and the apple-touch icon.
// The picture is the real v6 mandarin from the reference project (src/data/mandarin.json), drawn
// through the site's shared camera and shading (src/lib/refView.ts), with one facet selected: the
// moment of pointing at a part before saying what to change.
//
// Needs rsvg-convert (brew install librsvg) and uvx (for fonttools, to turn the site's Geist woff2
// into TTF that rsvg can use). Run: pnpm og
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Box3, Sphere, Vector3 } from 'three';
import { REGION_COLOR, VIEW, makeCamera, regionOf, shade } from '../src/lib/refView.ts';

const root = new URL('..', import.meta.url).pathname;
const tmp = mkdtempSync(join(tmpdir(), 'tangent-og-'));

// ---- fonts: Geist and Geist Mono from the site's own packages, PingFang TC from the system ----
const fontDir = join(root, 'node_modules/.cache/og-fonts');
mkdirSync(fontDir, { recursive: true });
for (const [pkg, file] of [['geist', 'geist-latin-wght-normal'], ['geist-mono', 'geist-mono-latin-wght-normal']]) {
  const ttf = join(fontDir, `${file}.ttf`);
  if (existsSync(ttf)) continue;
  execFileSync('uvx', ['--from', 'fonttools', '--with', 'brotli', 'fonttools', 'ttLib.woff2', 'decompress',
    join(root, `node_modules/@fontsource-variable/${pkg}/files/${file}.woff2`), '-o', ttf], { stdio: 'ignore' });
}
const fontsConf = join(tmp, 'fonts.conf');
writeFileSync(fontsConf, `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig>
<include ignore_missing="yes">/opt/homebrew/etc/fonts/fonts.conf</include><include ignore_missing="yes">/usr/local/etc/fonts/fonts.conf</include>
<dir>${fontDir}</dir><cachedir>${join(tmp, 'cache')}</cachedir></fontconfig>`);
// rsvg's text engine asks macOS for fonts unless told to use fontconfig
const env = { ...process.env, PANGOCAIRO_BACKEND: 'fc', FONTCONFIG_FILE: fontsConf };
const render = (svg: string, out: string, w: number, h: number) => {
  const file = join(tmp, 'in.svg');
  writeFileSync(file, svg);
  execFileSync('rsvg-convert', ['-w', String(w), '-h', String(h), file, '-o', out], { env });
};

// ---- brand mark and the model ----
const facetsSrc = readFileSync(join(root, 'src/components/brandMarkFacets.ts'), 'utf8');
const facets = [...facetsSrc.matchAll(/\['([^']+)', '(#[0-9A-Fa-f]{6})'\]/g)].map((m) => [m[1], m[2]]);
const markPaths = facets.map(([d, f]) => `<path d="${d}" fill="${f}" stroke="${f}" stroke-width="0.5" stroke-linejoin="round"/>`).join('');
const mark = (x: number, y: number, s: number) => `<svg x="${x}" y="${y}" width="${s}" height="${s}" viewBox="29 32 83 84">${markPaths}</svg>`;

type Face = { p: number[]; n: number[]; e: number };
const model = JSON.parse(readFileSync(join(root, 'src/data/mandarin.json'), 'utf8'));
const part = model.parts[0];
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const box = new Box3();
part.faces.forEach(({ p }: Face) => [0, 3, 6].forEach((i) => box.expandByPoint(new Vector3(p[i], p[i + 1], p[i + 2]))));
const centre = box.getCenter(new Vector3());
const camera = makeCamera(box.getBoundingSphere(new Sphere()).radius);
const { width: VW, height: VH } = VIEW;
const tris = part.faces
  .map(({ p, n, e }: Face) => {
    const pts = [0, 3, 6].map((i) => new Vector3(p[i], p[i + 1], p[i + 2]).sub(centre));
    const normal = new Vector3().subVectors(pts[1], pts[0]).cross(new Vector3().subVectors(pts[2], pts[0])).normalize();
    if (normal.dot(new Vector3(n[0], n[1], n[2])) < 0) normal.negate();
    const mid = pts[0].clone().add(pts[1]).add(pts[2]).divideScalar(3);
    const region = regionOf(p);
    const xy = pts.map((q) => { const v = q.clone().project(camera); return [((v.x + 1) / 2) * VW, ((1 - v.y) / 2) * VH]; });
    return {
      visible: normal.dot(camera.position.clone().sub(mid)) > 0,
      depth: -mid.distanceTo(camera.position),
      xy, region, edge: e === 1,
      area: Math.abs((xy[1][0] - xy[0][0]) * (xy[2][1] - xy[0][1]) - (xy[2][0] - xy[0][0]) * (xy[1][1] - xy[0][1])) / 2,
      fill: `rgb(${rgb(region === 'body' ? part.color : REGION_COLOR[region]).map((c) => Math.round(c * shade(normal))).join(',')})`,
    };
  })
  .filter((f) => f.visible)
  .sort((a, b) => a.depth - b.depth);
const centroid = (f: (typeof tris)[number]) => [0, 1].map((k) => (f.xy[0][k] + f.xy[1][k] + f.xy[2][k]) / 3);
// The selected facet: the largest whole-facet triangle on the body, a little right of and below centre
const picked = tris
  .filter((f) => f.region === 'body' && f.edge)
  .filter((f) => { const [cx, cy] = centroid(f); return Math.abs(cx - VW * 0.55) < 50 && Math.abs(cy - VH * 0.62) < 40; })
  .sort((a, b) => b.area - a.area)[0];
const d = (xy: number[][]) => 'M' + xy.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join('L') + 'Z';
const modelPaths = tris.map((f) =>
  `<path d="${d(f.xy)}" fill="${f.fill}" stroke="${f.edge ? 'rgba(42,20,8,0.4)' : f.fill}" stroke-width="${f.edge ? 0.5 : 0.3}" stroke-linejoin="round"/>`).join('');
const [tx, ty] = centroid(picked);
const selection = `<path d="${d(picked.xy)}" fill="#B9C2FF" fill-opacity="0.82" stroke="#4F5FE8" stroke-width="1.8" stroke-linejoin="round"/>`;
const pointer = `<path d="M0 0l0 19 5.2-5 3.6 8 3.2-1.4-3.6-8 7.2-.4z" transform="translate(${(tx + 1).toFixed(1)} ${(ty + 1).toFixed(1)})" fill="#16171C" stroke="#FFFFFF" stroke-width="1.3" stroke-linejoin="round"/>`;

// ---- the two cards ----
const MX = 560, MY = 40, MW = 640, S = MW / VW; // model placement
const SANS = 'Geist', MONO = 'Geist Mono', CJK = 'PingFang TC, Heiti TC, Noto Sans CJK TC, sans-serif';
const cards = {
  en: { lines: ['Point at it.', 'Tell it what', 'to change.'], font: SANS, weight: 500, size: 66, step: 78, tracking: -2.4, chip: '@Sloped face', chipFont: SANS, eyebrow: 'MACOS APP' },
  'zh-tw': { lines: ['指給它看，', '說要改什麼。'], font: CJK, weight: 600, size: 68, step: 90, tracking: 0, chip: '@斜面', chipFont: CJK, eyebrow: 'macOS 應用程式' },
};
for (const [locale, c] of Object.entries(cards)) {
  const top = locale === 'en' ? 320 : 350;
  const headline = c.lines.map((l, i) =>
    `<text x="76" y="${top + i * c.step}" font-family="${c.font}" font-weight="${c.weight}" font-size="${c.size}" letter-spacing="${c.tracking}" fill="#FFE1C2">${l}</text>`).join('');
  // The message pill: the selected face as a chip, and the caret where the instruction goes next
  const chipW = locale === 'en' ? 150 : 74;
  const px = MX + tx * S + 30, py = MY + ty * S + 28;
  const pill = `<g transform="translate(${px.toFixed(1)} ${py.toFixed(1)})">
    <rect width="${chipW + 46}" height="50" rx="25" fill="#FFF1E3"/>
    <rect x="10" y="9" width="${chipW}" height="32" rx="9" fill="#4F5FE8" fill-opacity="0.16"/>
    <text x="21" y="31" font-family="${c.chipFont}" font-weight="600" font-size="19" fill="#3F4FD4">${c.chip}</text>
    <rect x="${chipW + 20}" y="13" width="2" height="24" rx="1" fill="#2A1408"/></g>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1.3" fill="#FFAE5E" fill-opacity="0.12"/></pattern>
  <radialGradient id="glow" cx="0.75" cy="0.5" r="0.7"><stop offset="0" stop-color="#4A2410"/><stop offset="1" stop-color="#2A1408"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#glow)"/><rect width="1200" height="630" fill="url(#dots)"/>
  <svg x="${MX}" y="${MY}" width="${MW}" height="${MW * VH / VW}" viewBox="0 0 ${VW} ${VH}">${modelPaths}${selection}${pointer}</svg>
  ${pill}
  ${mark(72, 70, 54)}<text x="136" y="110" font-family="${SANS}" font-weight="700" font-size="40" letter-spacing="-1.6" fill="#FFE1C2">Tangent</text>
  ${headline}
  <text x="78" y="560" font-family="${locale === 'en' ? MONO : CJK}" font-size="20" letter-spacing="${locale === 'en' ? 3 : 1}" fill="#F0B98A">${c.eyebrow}</text>
</svg>`;
  render(svg, join(root, `public/og-${locale}.png`), 1200, 630);
}

const touch = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 140 140"><rect width="140" height="140" fill="#2A1408"/><svg x="14" y="12" width="112" height="112" viewBox="29 32 83 84">${markPaths}</svg></svg>`;
render(touch, join(root, 'public/apple-touch-icon.png'), 180, 180);
console.log('Wrote og-en.png, og-zh-tw.png, apple-touch-icon.png');
