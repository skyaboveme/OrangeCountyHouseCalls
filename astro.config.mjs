// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://orangecountyhousecalls.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  redirects: {
    // Legacy WordPress URLs preserved for SEO equity
    '/blog/staff/dr-sina-khaneki/': '/about/',
    '/10264-2/': '/',
  },
});
