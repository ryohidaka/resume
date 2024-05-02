import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
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
        "docs/.vitepress/vitepress-pdf.config.ts",
      ],
    },
    environment: "happy-dom",
  },
});
