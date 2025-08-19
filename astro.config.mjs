import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://tuto-astro-three.vercel.app/",
  integrations: [preact()]
});