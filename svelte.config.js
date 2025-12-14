import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/guhe.life' : ''
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // ignore missing pages
        if (message.includes('Not found:')) {
          return;
        }
        // ignore empty dynamic routes (when no blog posts exist)
        if (message.includes('were not prerendered because they were not found while crawling')) {
          return;
        }
        // fail on other errors
        throw new Error(message);
      },
      handleMissingId: ({ path, referrer, message }) => {
        // ignore missing entries for dynamic routes when empty
        if (path.includes('[slug]')) {
          return;
        }
        throw new Error(message);
      }
    },
    appDir: 'app'
  },
  preprocess: vitePreprocess()
};

export default config;
