import { createRouter, createWebHistory } from 'vue-router';
const AUTHOR_NAME='Mostefa Boudjema';

function generateMetaTitle(routeName, projectType) {
    return `${AUTHOR_NAME} - ${projectType? projectType+' ':''}${routeName}`;
}

const routes=[
    {
        path: '/admin',
        name: "/",
        redirect: "/dashboard",
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('../Pages/Dashboard.vue'),
                meta: {
                    title: generateMetaTitle('Dashboard'),
                },
            },
            {
                path: '/product',
                component: import('../Pages/Products/IndexProduct.vue'),
                name: 'Product',
                meta: {
                    title: generateMetaTitle('Product'),
                },
            },
            {
                path: '/blank',
                name: 'Blank',
                component: () => import('../Pages/Blank.vue'),
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
        document.getElementById('app').scrollIntoView();
    },
});

export default router;
