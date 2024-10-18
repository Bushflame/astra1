import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import stylus from 'stylus';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  // ... other configurations ...
  build: {
    // Enable Stylus support
    preprocessors: {
      stylus: {
        plugin: stylus(),
      },
    },
  },
  output: "server",
  integrations: [tailwind()]
});