import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: true
  },
  base: mode === 'production' ? '' : '/'
}));
