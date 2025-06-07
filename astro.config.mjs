import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],
  output: "server",
  adapter: cloudflare(),
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  }
});