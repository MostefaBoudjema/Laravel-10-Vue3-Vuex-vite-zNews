import { createRouter, createWebHistory } from 'vue-router';
const AUTHOR_NAME='Mostefa Boudjema';

function generateMetaTitle(routeName, projectType) {
    return `${AUTHOR_NAME} - ${projectType? projectType+' ':''}${routeName}`;
}

import Blank from '../Pages/Blank.vue'
import IndexProduct from '../Pages/Products/IndexProduct.vue'
import Dashboard from '../Pages/Dashboard.vue'
import Login from '../Pages/Auth/Login.vue'
const routes = [
    { path: '/login', component: Login, name: 'login' },
    // { path: '/login', component: Login, name: 'login', hidden: true },
    {
        path: '/admin',
        name: "Layout",
        redirect: "/admin/dashboard",
        children: [
            {
                path: '/admin/dashboard', // Keep the path as '/dashboard'
                name: 'Dashboard',
                component: Dashboard,
                meta: {
                    title: generateMetaTitle('Dashboard'),
                },
            },
            {
                path: '/admin/product', // Add the "dashboard" prefix here
                component: IndexProduct,
                name: 'Product',
                meta: {
                    title: generateMetaTitle('Product'),
                },
            },
            {
                path: '/admin/blank', // Add the "dashboard" prefix here
                name: 'Blank',
                component: Blank,
                meta: {
                    title: generateMetaTitle('Blank'),
                },
            },
        ]
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
