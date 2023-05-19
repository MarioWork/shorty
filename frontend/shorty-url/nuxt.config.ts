export default defineNuxtConfig({
  runtimeConfig: {
    API_KEY: process.env.API_KEY,
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
