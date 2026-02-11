import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://syncsolved.com',
  output: 'server',
  adapter: cloudflare({
    platformProxy: { enabled: false },
    imageService: 'passthrough',
  }),
  integrations: [react()],
  server: { host: '0.0.0.0', port: 4321 },
  vite: {
    ssr: {
      external: ['node:buffer', 'node:crypto'],
    },
  },
});
