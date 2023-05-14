export default defineNuxtConfig({
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
