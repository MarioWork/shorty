export default defineNuxtConfig({
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
    public: {
      RETRIEVE_API: process.env.RETRIEVE_API,
      WRITE_API: process.env.WRITE_API,
    },
  },
  modules: ['@invictus.codes/nuxt-vuetify'],
  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
    },
  },
});
