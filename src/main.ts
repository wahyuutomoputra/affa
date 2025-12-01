import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin, QueryClient, type VueQueryPluginOptions } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

const queryClient = new QueryClient()
const vueQueryOptions: VueQueryPluginOptions = {
  queryClient,
}

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueQueryPlugin, vueQueryOptions)

app.mount('#app')

