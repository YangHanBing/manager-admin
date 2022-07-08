import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入公共样式
import '../src/styles/index.scss'

const app = createApp(App)

app.use(store).use(router).use(ElementPlus).mount('#app')
