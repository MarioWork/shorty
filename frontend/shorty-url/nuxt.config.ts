export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      RETRIEVE_API: process.env.RETRIEVE_API,
      WRITE_API: process.env.WRITE_API,
    },
  },
});
