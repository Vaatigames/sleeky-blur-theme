import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://vaatigames.ovh',
  integrations: [sitemap(), icon(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});