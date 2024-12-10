import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    locale: {
      locale: "it",
      fallback: "en",
    },
    theme: {
      defaultTheme: DARK_THEME,
      themes: {
        dark,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify)
})
