import { defineConfig } from 'vite';
import puterLocalhost from '../../dev/puter-localhost.mjs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [puterLocalhost('chess')],
  base: './',
  build: {
    target: 'es2022',
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.js'],
  },
});
