import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(),visualizer({ open: true, filename: 'bundle-visualization.html' })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
