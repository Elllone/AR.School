export default defineNuxtConfig({
  //common
  typescript: {
    shim: true,
    strict: true,
    typeCheck: true,
  },
  ssr: true,
  devtools: { enabled: false },

  //auto imports
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ['./types/**'],
  },

  //plugins[modules]
  modules: [
    'nuxt-primevue',
    'nuxt-typed-router',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@tresjs/nuxt',
  ],
  css: [
    'primevue/resources/themes/lara-dark-green/theme.css',
    'primeflex/primeflex.css',
  ],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: '*',
      prefix: 'Pr',
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  googleFonts: {
    families: {
      Roboto: {
        wght: [300, 400, 700],
      },
    },
  },

  //develop
  devServer: {
    port: 5176,
  },
})
