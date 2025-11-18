import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

export default defineConfig({
  base: "/my-digital-showroom-90/",
  server: {
    host: "::",
    port: 5173
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src")
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
