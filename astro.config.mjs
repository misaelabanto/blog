// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Import the official @tailwindcss/vite plugin

// https://astro.build/config
export default defineConfig({
  site: 'https://misaelabanto.com',
  integrations: [mdx(), sitemap()],
  output: 'static',

  vite: {
     plugins: [tailwindcss()]
  }
});
