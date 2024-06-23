import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    react(),
  ],
  site: "https://portfolio-mrtn.github.io",
  base: "portfolio-dev",
});
