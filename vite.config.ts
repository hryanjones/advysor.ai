import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Makes asset links relative
  plugins: [react(), tailwindcss()],
  // build: {
  //   assetsInlineLimit: Number.POSITIVE_INFINITY, // Inline all assets into the HTML
  // },
});
