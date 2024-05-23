import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/vuex/store";
import './assets/main.css'
import './assets/styles/variables.scss'

createApp(App).use(router).use(store).mount('#app')
