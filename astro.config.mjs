// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; // Import the official @tailwindcss/vite plugin
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://misaelabanto.com',
  integrations: [mdx(), sitemap()],
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: "redirect"
    },
    fallback: {
      es: "en"
    }
  },
  vite: {
     plugins: [tailwindcss()]
  }
});
