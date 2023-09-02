import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [react({
    experimentalReactChildren: true
  }), tailwind()],
  renderers: ['@astrojs/renderer-react'],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
});