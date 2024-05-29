import { createApp } from 'vue'
import './style.css'
import './assets/reset.css'
import App from './App.vue'
import ToyElement from 'toy-element'

createApp(App).use(ToyElement).mount('#app')
