import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Docelowa domena produkcyjna — zaktualizować po wyborze domeny / Vercela.
const SITE = 'https://przemo-oil.pl';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  // Pasek narzędzi dev (logo Astro w rogu) — wyłączony, też lokalnie.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Optymalizacja lokalnych assetów do WebP przez sharp.
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
