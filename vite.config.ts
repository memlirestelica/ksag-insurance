import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages project site: https://<user>.github.io/ksag-insurance/
const base = process.env.GITHUB_PAGES === "true" ? "/ksag-insurance/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
