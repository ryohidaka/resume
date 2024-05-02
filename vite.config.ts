import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ["./setup.ts"],
    coverage: {
      exclude: [
        "**/**/index.ts",
        "node_modules",
        "docs/.vitepress/config.mts",
        "docs/.vitepress/cache",
        "docs/.vitepress/data",
      ],
    },
  },
});
