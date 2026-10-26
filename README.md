# Tangent site

The marketing site for [Tangent](../tangent), the macOS app where you describe a part in chat and an
AI Agent builds a real, measurable solid model with build123d.

Static [Astro](https://astro.build) site: every page is pre-rendered HTML, with one small script that
fades sections in as they scroll into view (the content is fully visible without it).

## Run, build, preview

Needs Node 22.12 or newer and pnpm.

```bash
pnpm install
pnpm dev            # dev server on http://localhost:4321 with live reload
pnpm build          # static files into dist/
pnpm preview        # serve dist/ on http://localhost:4321
pnpm check          # after a build: checks titles, descriptions, canonical, hreflang, OG/Twitter, JSON-LD, h1, alt text, placeholders
pnpm og             # regenerate public/og-*.png and apple-touch-icon.png (needs rsvg-convert: brew install librsvg)
```

## Before publishing

- **Domain.** There is no public domain yet. Canonical URLs, `hreflang` links, Open Graph URLs,
  `robots.txt` and `sitemap.xml` are built from `SITE_URL`, which falls back to the placeholder
  `https://example.com` (`astro.config.mjs`). Build with the real one:
  `SITE_URL=https://your-domain pnpm build`.
- **Download.** Every Download button is a placeholder: a `<button data-placeholder="download">`
  with no `href` and no handler (`src/components/DownloadButton.astro`). Replace it with a link once
  a build is published. `pnpm check` fails if a placeholder gains an `href`, so update the check too.

## Version control

Same rules as the app:

- Work on `main` with git; branch only when the owner asks.
- Commit only when the owner asks, and never push unless asked. Commit messages explain the
  intent, not the list of files.
- The version lives in `package.json`, starting at 0.1.0. Bump it in the same commit as the change:
  minor for a new capability (a section, a page, a language), patch for fixes, copy and docs.
  Stay below 1.0 until the owner announces v1.
- `dist/`, `.astro/` and `node_modules/` are never committed (`.gitignore`); `pnpm-lock.yaml` is.

## Languages

| URL | Language | Copy |
| --- | --- | --- |
| `/` | English (default, also `x-default`) | `src/i18n/en.ts` |
| `/zh-tw/` | Traditional Chinese | `src/i18n/zh-tw.ts` |

Both dictionaries have the same shape (the type enforces it). Copy follows the app's own wording
(`tangent/docs/copy.md` and the app's i18n). Only state what the app actually does; don't add
taglines, pricing, release dates, stats or testimonials the owner hasn't defined.

## Layout

```
astro.config.mjs        site URL placeholder, sitemap with hreflang alternates
src/pages/              index.astro (en), zh-tw/index.astro, robots.txt.ts
src/layouts/Base.astro  <head>: title, description, canonical, hreflang, OG, Twitter, JSON-LD
src/components/         Home (all sections), MockApp (drawn app window), ExampleArt (line drawings),
                        Mark (mandarin logo), Icon, DownloadButton
src/components/brandMarkFacets.ts   copied from tangent/src/components/ (generated there; recopy if the mark changes)
src/lib/draw.ts         isometric and gear geometry for the drawings
src/styles/global.css   tokens (light and dark), layout, motion
scripts/                og.mjs (social images), check-dist.mjs (built-output checks)
```

Design follows the app: neutral page, apricot and brown from the icon tiles for brand moments,
orange only for the Agent and the brand, blue-violet only for "you selected this". Light and dark
follow the system. Motion is limited to the hero (facets drifting, the name coming into focus) and
fade-ins; `prefers-reduced-motion` turns all of it off.
