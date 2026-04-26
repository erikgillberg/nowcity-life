// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://nowcity.life',
  integrations: [
    tailwind({
      applyBaseStyles: false, // base managed in src/styles/global.css
    }),
    preact(),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
