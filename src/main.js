import 'amfe-flexible'
import Vant from 'vant';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css'
import 'nprogress/nprogress.css'
import App from './App.vue'
import router from './router'
import globalComponents from '@/components/global'
const root = document.documentElement
root.setAttribute('data-theme', 'light')
const app = createApp(App)
app.use(createPinia())
app.use(Vant)
app.use(router)
app.use(globalComponents)
app.mount('#app')