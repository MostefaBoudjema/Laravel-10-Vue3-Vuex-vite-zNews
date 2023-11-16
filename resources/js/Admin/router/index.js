import { createRouter, createWebHistory } from 'vue-router';
const AUTHOR_NAME='Mostefa Boudjema';

function generateMetaTitle(routeName, projectType) {
    return `${AUTHOR_NAME} - ${projectType? projectType+' ':''}${routeName}`;
}
const routes = [
    { path: '/admin/login', component: () => import('~admin/Auth/Login.vue'), name: 'login' },
    {
        path: '/admin',
        name: "Basic",
        component: () => import('~admin/layouts/Basic.vue'),
        redirect: "/admin/dashboard",
        children: [
            {
                path: '/admin/dashboard', 
                name: 'Dashboard',
                component: () => import('~admin/Pages/Dashboard.vue'),
                meta: {
                    title: generateMetaTitle('Dashboard'),
                },
            },
            {
                path: '/admin/product',
                component: () => import('~admin/Pages/Products/IndexProduct.vue'),
                name: 'Product',
                meta: {
                    title: generateMetaTitle('Product'),
                },
            },
            {
                path: '/admin/blank', 
                name: 'Blank',
                component: () => import('~admin/Pages/Blank.vue'),
                meta: {
                    title: generateMetaTitle('Blank'),
                },
            },
        ]
    },
    {
        path: '/admin/:catchAll(.*)',
        component: () => import('~frontend/views/404.vue'),
    },
];


const router=createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app');
        // document.getElementById('app').scrollIntoView();
    },
});

export default router;
