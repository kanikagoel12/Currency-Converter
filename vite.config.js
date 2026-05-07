import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite Configuration for Currency Converter
 * 
 * Features:
 * - React Fast Refresh for development
 * - Production optimizations:
 *   - CSS minification
 *   - JS minification and tree-shaking
 *   - Asset optimization
 *   - Source maps for debugging
 * - Environment variable support
 * 
 * @see https://vitejs.dev/config/
 */

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize build output
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: false, // Keep console logs for debugging (set to true for production)
        dead_code: true,
      },
    },
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["lucide-react", "sonner"],
        },
      },
    },
    // Increase chunk size warning threshold (default is 500kb)
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false, // Set to true for production debugging
  },
  
  // Optimization settings
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react", "sonner"],
  },
});
