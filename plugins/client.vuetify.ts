import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

const variant = 'solo-filled'

export default defineNuxtPlugin({
  name: 'vuetify',
  setup: async (nuxtApp) => {
    const vuetify = createVuetify({
      ssr: false,
      blueprint: md3,
      theme: {
        defaultTheme: 'dark',
      },
      defaults: {
        VTextField: {
          variant,
          rounded: 'lg',
        },
      },
    })
    nuxtApp.vueApp.use(vuetify)
  },
})
