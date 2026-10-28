// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical URLs, hreflang links, Open Graph URLs and sitemap.xml are all built from this value.
// SITE_URL wins; on Vercel the production domain is used automatically; local builds use the
// public domain.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const site = process.env.SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : 'https://tangent.nicraft.co');

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
