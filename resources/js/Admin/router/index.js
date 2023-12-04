import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
const AUTHOR_NAME = 'Mostefa Boudjema';

function generateMetaTitle(routeName, projectType) {
    return `${AUTHOR_NAME} - ${projectType ? projectType + ' ' : ''}${routeName}`;
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
    }
});

export default router;
