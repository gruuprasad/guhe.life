import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
      assets: process.env.NODE_ENV === 'production' ? '' : ''
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
    appDir: '_app',
    trailingSlash: 'always'
  },
  preprocess: vitePreprocess()
};

export default config;
