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

// custom components
import TablePagination from "@/components/TablePagination.vue";


app.use(naive)
app.use(router)

app.component('Table-Pagination', TablePagination)

app.mount('#app')
