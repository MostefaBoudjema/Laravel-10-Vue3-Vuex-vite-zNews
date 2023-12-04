// app.js 
import './bootstrap';
import { createApp } from 'vue';

import '@fortawesome/fontawesome-free/css/all.css';
import App from './Frontend/App.vue'
import router from './Frontend/router'
import store from './store'
import i18n from './Lang/i18n';

const app=createApp(App);
app.use(router)
    .use(i18n)
    .use(store)


app.mount('#app');
