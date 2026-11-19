// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import cloudflare from '@astrojs/cloudflare';

// Keystatic's `local` storage writes to the filesystem, which the Cloudflare
// workerd runtime can't do. Run `astro dev` in Node (no adapter) and only use
// the Cloudflare adapter for build/preview/deploy.

// @ts-ignore
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  adapter: isDev ? undefined : cloudflare(),
});
