import adapter from "@sveltejs/adapter-static";

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
      base: process.env.NODE_ENV === "production" ? "/guhe.life" : "",
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // ignore missing pages
        if (message.includes('Not found:')) {
          return;
        }
        // fail on other errors
        throw new Error(message);
      }
    }
  },
};

export default config;
