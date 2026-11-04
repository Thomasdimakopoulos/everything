import { defineConfig } from "vite";
import puterLocalhost from "../../dev/puter-localhost.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [puterLocalhost("presentation")],
  base: "./",
  test: { include: ["tests/**/*.test.js", "lib/**/*.test.ts"] },
});
