import { defineUserConfig } from "vitepress-export-pdf";

const margin = 30;

export default defineUserConfig({
  outDir: "./docs/public",
  outFile: "resume.pdf",
  pdfOptions: {
    format: "A4",
    margin: {
      top: margin,
      bottom: margin,
      left: margin,
      right: margin,
    },
  },
  routePatterns: ["/index.html"],
});
