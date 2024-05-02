import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "職務経歴書",
  description: "日高凌の職務経歴書",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: "見出し",
      level: "deep",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
