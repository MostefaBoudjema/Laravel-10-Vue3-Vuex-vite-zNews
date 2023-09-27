import './bootstrap';
import { createApp } from 'vue';

import Admin from './Admin.vue'
import router from './router'
import store from './store'


const admin=createApp(Admin);
admin.use(router)
    .use(store)


admin.mount('#admin');
