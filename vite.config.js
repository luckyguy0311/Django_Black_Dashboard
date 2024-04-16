import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "modules",
    outDir: "./static/dist",
    cssCodeSplit: true,
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: "./static/assets/scss/black-dashboard.scss",
      output: {
        assetFileNames: 'black-dashboard.[ext]'
      },
    },
  },
});
