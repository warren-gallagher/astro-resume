import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://resume.gallaghers.ca',
  // Emit /contact.html rather than /contact/index.html so GitHub Pages serves
  // /contact directly (no 301 to /contact/) and existing URLs keep working.
  build: { format: 'file' },
  trailingSlash: 'never',
});
