import { defineConfig } from 'vite';
import puterLocalhost from '../../dev/puter-localhost.mjs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [puterLocalhost('pos')],
  base: './',
  build: {
    target: 'es2022',
    cssTarget: 'safari15',
  },
  server: {
    port: 5174,
  },
  test: {
    environment: 'node',
    include: ['test/**/*.test.js'],
  },
});
