import { defineConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  base: './',
  build: {
    target: 'es2022',
    cssTarget: 'safari15',
  },
  server: {
    port: 5173,
  },
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.test.js'],
  },
});
