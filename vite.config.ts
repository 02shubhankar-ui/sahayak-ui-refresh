import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // 👇 Add this line (or a wildcard for all replit.dev subdomains)
    allowedHosts: ["24e76ce6-7e9d-4c98-b5f1-b50d3e2eaab0-00-2zy1n9gwskwhw.riker.replit.dev"],
    // or allowedHosts: [".replit.dev"]
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
