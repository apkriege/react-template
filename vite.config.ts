import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@api": "/src/api",
      "@app": "/src/app",
      "@pages": "/src/pages",
    },
  },
});
