// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PLACEHOLDER: Tangent has no public domain yet. Canonical URLs, hreflang links,
// Open Graph URLs and sitemap.xml are all built from this value, so set SITE_URL
// (e.g. SITE_URL=https://your-domain pnpm build) once the owner picks a domain.
const site = process.env.SITE_URL ?? 'https://example.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', 'zh-tw': 'zh-TW' } },
    }),
  ],
});
