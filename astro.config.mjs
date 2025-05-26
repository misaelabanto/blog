// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Import the Astro Tailwind integration

// https://astro.build/config
export default defineConfig({
  site: 'https://misaelabanto.com',
  integrations: [mdx(), sitemap()], // Add tailwind() to integrations
  output: 'static',

  // Remove the vite.plugins entry as it's handled by the Astro integration
  vite: {
     plugins: [tailwindcss()]
  }
});</source>
