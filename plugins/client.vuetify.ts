import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin({
  name: 'vuetify',
  setup: async (nuxtApp) => {
    const vuetify = createVuetify({
      ssr: true,

      theme: {
        defaultTheme: 'dark',
      },
    })
    nuxtApp.vueApp.use(vuetify)
  },
})
