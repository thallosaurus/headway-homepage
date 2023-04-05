import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router.js';
import { store } from './store.js';

let app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app')
