import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/my-cv-app/",
  plugins: [react()],
  build: {
    outDir: "build", // ← change output folder from 'dist' to 'build'
    assetsDir: "assets", // (optional) put hashed assets in 'build/assets'
  },
});
