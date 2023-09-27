import { createRouter, createWebHistory } from 'vue-router';
const AUTHOR_NAME = 'Mostefa Boudjema';

function generateMetaTitle(routeName, projectType) {
    return `${AUTHOR_NAME} - ${projectType ? projectType + ' ' : ''}${routeName}`;
}

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Products/IndexProduct.vue'),
        meta: {
            title: generateMetaTitle('Index'),
        },
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products/IndexProduct.vue'),
        meta: {
            title: generateMetaTitle('Products'),
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: generateMetaTitle('Home'),
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    },
});

export default router;
