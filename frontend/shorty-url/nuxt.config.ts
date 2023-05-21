export default defineNuxtConfig({
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
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
