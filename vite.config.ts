import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './', // Makes asset links relative
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  plugins: [react()],
  // build: {
  //   assetsInlineLimit: Number.POSITIVE_INFINITY, // Inline all assets into the HTML
  // },
});
