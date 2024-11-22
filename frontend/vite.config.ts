import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    target: ["es2021", "chrome100", "safari13"],
  },
  server: {
    host: "0.0.0.0",
    port: 6972,
  },
});
