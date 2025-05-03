import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "" : "",
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
