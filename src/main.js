import { createApp } from 'vue'
import './style.css'
import './assets/scss/index.scss'
import App from './App.vue'
import router from "@/router/router.js";
import naive from 'naive-ui'
import VueApexCharts from "vue3-apexcharts";
import TablePagination from "@/components/TablePagination.vue";
import { createI18n } from 'vue-i18n'
import {
    defaultLocale,
    languages,
} from './i18n/i18n.js';
const messages = Object.assign(languages)
const i18n = createI18n({
    // something vue-i18n options here ...
    // locale: defaultLocale,
    // messages,
    legacy: false, // If you are using Vue 2 syntax, set this to true
    locale: 'en', // Default locale
    fallbackLocale: 'en',
    messages: {},

})


setTimeout(()=>{
    i18n.global.setLocaleMessage(
        'en', {
            'message': {
                'hello': 'Hello world'
            },
            'title':"Salom en",

        },
    )

}, 3000)


const app = createApp(App)
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)
// custom components

app.use(naive)
app.use(router)
app.use(i18n)
app.use(VueApexCharts)
console.log(app.config.globalProperties.$i18n)
app.component('Table-Pagination', TablePagination)
window.$Router = app.config.globalProperties.$router;
window.$Route = app.config.globalProperties.$route;
app.mount('#app')

