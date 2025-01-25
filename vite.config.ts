import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
    include: [
      "@thirdweb-dev/wallets",
      "@thirdweb-dev/react",
      "@thirdweb-dev/sdk",
      "@thirdweb-dev/chains"
    ],
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      external: ["buffer"],
    },
  },
  resolve: {
    alias: {
      buffer: "buffer/",
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: "util"
    },
  },
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
});