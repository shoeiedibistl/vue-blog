import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/shared/router/index.ts'

const app = createApp(App)

// Включить Devtools
if (import.meta.env.MODE === 'development') {
  app.config.devtools = true
}

app.use(createPinia())
app.use(router)

app.mount('#app')
