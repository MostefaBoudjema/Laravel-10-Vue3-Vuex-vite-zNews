import './bootstrap';
import { createApp } from 'vue';

import App from './Frontend/App.vue'
import router from './Frontend/router'
import store from './store'


const app=createApp(App);
app.use(router)
    .use(store)


app.mount('#app');
