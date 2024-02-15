import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
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
    presets: [
      {
        from: 'vuetify',
        imports: ['createVuetify'],
      },
    ],
    dirs: ['./types/**'],
  },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],

  //plugins[modules]
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'nuxt-typed-router',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@tresjs/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
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
