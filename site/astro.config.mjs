import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pycoclaw.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
