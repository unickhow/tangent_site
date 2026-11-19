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
pnpm check          # after a build: checks titles, descriptions, canonical, hreflang, OG/Twitter, JSON-LD, h1, alt text, the download link
pnpm og             # regenerate public/og-*.png and apple-touch-icon.png (needs rsvg-convert: brew install librsvg,
                    # and uvx, which converts the site's Geist fonts for it)
```

## Before publishing

- **Domain.** The public domain is `https://tangent.nicraft.co`. Canonical URLs, `hreflang` links,
  Open Graph URLs, `robots.txt` and `sitemap.xml` are built from `SITE_URL`, which falls back to
  Vercel's `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`, then to the public domain
  (`astro.config.mjs`). On Vercel, keep `tangent.nicraft.co` as the project's production domain.
- **Download.** Every call to action points at the "Get Tangent" section (`#get`,
  `src/components/GetTangent.astro`), whose button downloads the installer. The address is not
  written by hand: `src/lib/release.ts` reads `public/updates/v0/latest.json` (the manifest the app
  checks for updates) at build time and derives the installer `Tangent_X.Y.Z_aarch64.dmg` from the
  update archive's address (same folder, same name stem: the app repo's convention, published names
  are never replaced), so pushing a release (`tangent/docs/RELEASING.md`) also moves the button.
  A manifest that doesn't match that pattern fails the build. `pnpm check` verifies the link equals
  the manifest's version, that the host is `download.nicraft.co` (the host the Privacy Policy names)
  and, online, that the installer answers 200 as a disk image: a release published without `--dmg`
  would otherwise leave a dead button. The page, the JSON-LD and the hero show that version and
  the macOS it needs.
- **Token use.** The card under the sources compares an agent using the same text-to-cad skill, where
  the user describes each change in words, with Tangent, where the user points. It is computed from the
  app, not written by hand, for one change on a model with 1,919 tokens of code (`pi_enclosure`),
  English, GPT `o200k_base` as a stand-in. Words-only agent per message: skill 2,922
  (`skills/text-to-cad/cad-modeling.md`) + code 1,919 + a 30-token request + the whole code written
  back 2,009 = 6,880. Tangent: system prompt plus skill 4,021 (`server.py` `system_prompt()`) + code 1,919
  + 20 for headings + a pointed request of 91 (12 words + 79 for the selected face's position, normal and
  size, measured with `compose_turn`) + 2,009 = 8,060, 117% of the first. The second chart is
  6,880 x (1 + m) / 8,060 for m = 0, 1/10, 1/6, 1/4, 1/2: each wrong guess costs one more round, pointing
  is assumed never to miss, and m is not measured by anyone, so the card says only how often words would
  have to miss to break even (about one in six). It assumes the agent rewrites the whole code each time;
  an agent that patches only the changed lines uses fewer tokens, and the card says so. Re-measure and
  update both languages when the prompts, the skill, or the selection payload change.
- **Free.** Tangent is free, with no trial, purchase or license key. The site says so once, in the
  "Get Tangent" section, and notes that a model source's own usage fees are separate. If a sign-in
  (e.g. Google) is added later, update the Privacy Policy before it ships.

- **Legal.** The Privacy Policy and Terms of Use (`/privacy/`, `/terms/` and their `/zh-tw/`
  versions) are `src/legal/<doc>.<locale>.md`, adapted from Bangs' for what Tangent does
  differently: requests go from the Mac straight to the model source the user brings in (never
  through Nicraft), Tangent stores no keys, it fetches its own uv (pinned, checksum-verified) and
  uv downloads the engine from PyPI and GitHub, updates are checked against tangent.nicraft.co and
  downloaded from download.nicraft.co (signed), and AI-made models must be checked before anything
  is made from them. Nicraft is the operator and trademark owner, contact@nicraft.co the contact.
  When the app changes what it sends or stores (`tangent/AGENTS.md`), or before sign-in, crash
  reports or analytics ship, update both languages and bump `updated`.

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
src/pages/              index.astro (en), zh-tw/index.astro, privacy.astro, terms.astro (and zh-tw/), robots.txt.ts
src/legal/              privacy and terms, one Markdown file per language
src/layouts/Base.astro  <head>: title, description, canonical, hreflang, OG, Twitter, JSON-LD
src/components/         Home (all sections), MockApp (drawn app window playing one Agent turn),
                        PointDemo (click one hole, it joins the message, only it changes),
                        RefMock (a real reference-image project and its model),
                        LaunchMark (the app's launch), AgentMark (the Agent's
                        think / write / build motions), GetTangent ("Tangent is free", download),
                        ThemeSwitch (System / Light / Dark), Footer (same rows as Bangs' footer),
                        Legal (privacy and terms pages), Mark (mandarin logo), Icon
src/components/brandMarkFacets.ts   copied from tangent/src/components/ (generated there; recopy if the mark changes)
src/lib/draw.ts         isometric and gear geometry for the drawings
src/lib/viewer.ts       desktop-only three.js viewer for the reference-image model (lazy chunk)
src/lib/refView.ts      camera, lighting, edges and stem/leaf colouring shared by the drawing and the viewer
src/data/mandarin.json  the reference project's final mesh; public/ref/mandarin.glb is built from it
src/styles/global.css   tokens (light and dark), layout, motion
scripts/                og.mts (social images: the v6 mandarin with one face selected), check-dist.mjs (built-output checks),
                        extract-model.mjs (mesh out of a saved project), make-glb.mjs (mesh → GLB)
```

Design follows the app: neutral page, apricot and brown from the icon tiles for brand moments,
orange only for the Agent and the brand, blue-violet only for "you selected this". Light and dark
follow the system unless the visitor picks one in the header (System / Light / Dark,
`ThemeSwitch.astro`). The choice is kept in `localStorage` (`tangent-theme`) and applied before
first paint by the inline script in `Base.astro`'s `<head>`, which sets `data-theme` on `<html>`;
the tokens in `global.css` let `[data-theme]` override `prefers-color-scheme`.

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
- **Selection:** a pointer clicks one of the lid's holes, it joins the message as a chip, the
  Agent builds, and only that hole gets larger. The app's own wording and labels.
- **Closing mark:** one light pass.

Nothing loops for decoration. Without JavaScript, or with `prefers-reduced-motion`, every piece
shows its finished state.
