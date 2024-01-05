import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  typescript: {
    shim: true,
    strict: true,
    typeCheck: true,
  },
  ssr: true,
  devtools: { enabled: true },

  imports: {
    presets: [
      {
        from: 'vuetify',
        imports: ['createVuetify'],
      },
    ],
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: ['nuxt-typed-router', '@pinia/nuxt', '@nuxtjs/google-fonts'],
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

  devServer: {
    port: 5176,
  },
})
