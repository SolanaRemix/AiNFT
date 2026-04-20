import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import '@/styles/main.css'

const app = createApp(App)
const pinia = createPinia()
const queryClient = new QueryClient()

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin, { queryClient })

app.mount('#app')
