import { createApp } from 'vue'
import './assets/styles/index.css'
import 'bootstrap'
import './assets/styles/custom.scss';
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
