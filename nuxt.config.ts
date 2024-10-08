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
  app: {
    rootId: '_ar_school',
    buildAssetsDir: '_ar_school',
  },

  //auto imports
  components: [
    {
      path: './components',
      pathPrefix: true,
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
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/main.css',
  ],

  //plugins[modules]
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'nuxt-typed-router',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
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
    // Для работы всех функций во время тестирования
    https: {
      key: './key.pem',
      cert: './cert.pem',
    },
  },
  experimental: {
    viewTransition: true,
  },
})
