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
src/components/         Home (all sections), MockApp (drawn app window playing one Agent turn),
                        RefMock (a real reference-image project and its model),
                        ExampleArt (line drawings), LaunchMark (the app's launch), AgentMark (the Agent's
                        think / write / build motions), Mark (mandarin logo), Icon, DownloadButton
src/components/brandMarkFacets.ts   copied from tangent/src/components/ (generated there; recopy if the mark changes)
src/lib/draw.ts         isometric and gear geometry for the drawings
src/lib/viewer.ts       desktop-only three.js viewer for the reference-image model (lazy chunk)
src/lib/refView.ts      camera, lighting, edges and stem/leaf colouring shared by the drawing and the viewer
src/data/mandarin.json  the reference project's final mesh; public/ref/mandarin.glb is built from it
src/styles/global.css   tokens (light and dark), layout, motion
scripts/                og.mjs (social images), check-dist.mjs (built-output checks),
                        extract-model.mjs (mesh out of a saved project), make-glb.mjs (mesh → GLB)
```

Design follows the app: neutral page, apricot and brown from the icon tiles for brand moments,
orange only for the Agent and the brand, blue-violet only for "you selected this". Light and dark
follow the system.

Motion is ported from the app, with its timings, and each one shows something real:

- **Hero:** the launch from `LaunchScreen.tsx`. Facets fold in, the leaves unfold, one light
  passes, then the name appears. It is pure CSS, so it runs without JavaScript.
- **App window:** when it scrolls in, it plays one Agent turn once. The mark thinks, writes and
  builds (`BrandMark`), then the model draws its edges and fades in its faces
  (`Viewport3D` `playEntrance`).
- **Reference images:** a real project: the light icon attached with a request, then the turn as
  the app shows it (thinking, writing with the code's line count ticking up, building) while the
  final mesh (`src/data/mandarin.json`, from `scripts/extract-model.mjs`) is built up: body facets
  bottom-up, the stem, each leaf unfolding, one light pass. A Replay control plays it again. The
  timings are illustrative, not the project's.
- **Reference model on desktop:** with a fine pointer that hovers, WebGL and a window at least
  1024 px wide, a three.js viewer loads as the section nears the screen and fades in over the
  drawing once its turn has played. The drawing is projected at build time through the viewer's
  own camera and shading (`src/lib/refView.ts`), so the viewer's first frame matches it and the
  swap is a hard cut, not a fade. Drag or the arrow keys turn it (light inertia, none under
  reduced motion); the wheel keeps scrolling the page. Everywhere else the drawing stays.
- **Examples:** each drawing traces its outline as it appears, like opening an example in the app.
- **Closing mark:** one light pass.

Nothing loops for decoration. Without JavaScript, or with `prefers-reduced-motion`, every piece
shows its finished state.
