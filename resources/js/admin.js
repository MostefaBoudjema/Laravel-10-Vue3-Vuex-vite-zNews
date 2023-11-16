import './bootstrap';
import { createApp } from 'vue';

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Admin/css/style.css'
import Admin from './Admin/Admin.vue'
import router from './Admin/router'
import store from './store';
import i18n from './Lang/i18n';


const admin=createApp(Admin);
admin
    .use(router)
    .use(i18n)
    .use(store)


admin.mount('#admin');
