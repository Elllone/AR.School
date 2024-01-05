// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', 'nuxt-typed-router', '@pinia/nuxt'],
  primevue: {
    /* Options */
  },
  css: ['primevue/resources/themes/md-dark-deeppurple/theme.css'],
})
