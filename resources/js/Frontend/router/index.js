import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';


const router=createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    },
});

export default router;
