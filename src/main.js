import { createApp } from 'vue'
import './style.css'
import './assets/scss/index.scss'
import App from './App.vue'
import router from "@/router/router.js";
import naive from 'naive-ui'

const app = createApp(App)
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

var r = document.querySelector(':root');
r.style.setProperty(' --n-color', 'lightblue');
app.use(naive)
app.use(router)

app.mount('#app')
