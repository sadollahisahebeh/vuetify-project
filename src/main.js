/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import './assets/css/style.css'
// Composables
import { createApp } from 'vue'
import axios  from 'axios'
import store from './store/index.js'

const app = createApp(App)
 axios.defaults.baseURL= 'https://api-hoze.gorgon.ir/api/'
registerPlugins(app)
app.use(store);
app.mount('#app')
