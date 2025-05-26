// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from 'vite-plugin-tailwindcss'; // Import vite-plugin-tailwindcss

// https://astro.build/config
export default defineConfig({
  site: 'https://misaelabanto.com',
  integrations: [mdx(), sitemap()],
  output: 'static',

  vite: {
     plugins: [tailwindcss()]
  }
});
