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
    // Short city URLs -> canonical /<city>-ca/ house call landing pages
    '/aliso-viejo/': '/aliso-viejo-ca/',
    '/laguna-niguel/': '/laguna-niguel-ca/',
    '/laguna-hills/': '/laguna-hills-ca/',
    '/mission-viejo/': '/mission-viejo-ca/',
    '/rancho-mission-viejo/': '/rancho-mission-viejo-ca/',
    '/ladera-ranch/': '/ladera-ranch-ca/',
    '/laguna-beach/': '/laguna-beach-ca/',
    '/dana-point/': '/dana-point-ca/',
    '/coto-de-caza/': '/coto-de-caza-ca/',
    '/rancho-santa-margarita/': '/rancho-santa-margarita-ca/',
    '/lake-forest/': '/lake-forest-ca/',
    '/irvine/': '/irvine-ca/',
    '/newport-beach/': '/newport-beach-ca/',
    '/san-clemente/': '/san-clemente-ca/',
    '/san-juan-capistrano/': '/san-juan-capistrano-ca/',
  },
});
