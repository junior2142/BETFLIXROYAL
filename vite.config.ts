import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: "/liff-playground/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
