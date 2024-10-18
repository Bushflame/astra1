import { defineConfig } from 'astro/config';
import stylus from 'stylus';
// https://astro.build/config
export default defineConfig({
    // ... other configurations ...
    build: {
      // Enable Stylus support
      preprocessors: {
        stylus: {
          plugin: stylus(),
        },
      },
    },
  });
