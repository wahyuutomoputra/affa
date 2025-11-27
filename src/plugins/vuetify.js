import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2c3e50',
          secondary: '#34495e',
          accent: '#d4af37',
          error: '#f44336',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#fb8c00',
        },
      },
    },
  },
})

export default vuetify
