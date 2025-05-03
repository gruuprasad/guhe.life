import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/guhe.life' : '',
      assets: process.env.NODE_ENV === 'production' ? resolve(__dirname, 'build') : ''
    },
    prerender: {
      entries: ['*'],
      handleHttpError: ({ path, referrer, message }) => {
        // ignore missing pages
        if (message.includes('Not found:')) {
          return;
        }
        // fail on other errors
        throw new Error(message);
      }
    },
    appDir: 'app'
  },
  preprocess: vitePreprocess()
};

export default config;
