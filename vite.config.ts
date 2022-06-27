import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const path = require("path");
import * as path from "path";

// function _resolve(dir: string) {
//   return path.resolve(__dirname, dir)
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
