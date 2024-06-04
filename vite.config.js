import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist/client",
  },
  esbuild: {
    jsxFactory: "createElement",
    jsxFragment: "Fragment",
    loader:{
      ".js":"jsx"
    }
  }
});
