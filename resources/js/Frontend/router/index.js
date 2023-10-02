import { createRouter, createWebHistory } from 'vue-router';
const AUTHOR_NAME = 'Mostefa Boudjema';

function generateMetaTitle(routeName, projectType) {
    return `${AUTHOR_NAME} - ${projectType ? projectType + ' ' : ''}${routeName}`;
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: generateMetaTitle('Home'),
        },
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
        meta: {
            title: generateMetaTitle('Products'),
        },
    },
    {
        path: '/products-2',
        name: 'Products2',
        component: () => import('../views/Products-2.vue'),
        meta: {
            title: generateMetaTitle('Products'),
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: generateMetaTitle('About'),
        },
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue'),
        meta: {
            title: generateMetaTitle('Contact'),
        },
    },
    {
        path: '/testimonials',
        name: 'Testimonials',
        component: () => import('../views/Testimonials.vue'),
        meta: {
            title: generateMetaTitle('Testimonials'),
        },
    },
    {
        path: '/postcode',
        name: 'Postcode',
        component: () => import('../views/Postcode.vue'),
        meta: {
            title: generateMetaTitle('Postcode'),
        },
    },
    {
        path: '/category/home-delivery',
        name: 'HomeDelivery',
        component: () => import('../views/category/HomeDelivery.vue'),
        meta: {
            title: generateMetaTitle('Home Delivery'),
        },
    },
    {
        path: '/category/business-delivery',
        name: 'BusinessDelivery',
        component: () => import('../views/category/BusinessDelivery.vue'),
        meta: {
            title: generateMetaTitle('Business Delivery'),
        },
    },
    {
        path: '/category/leaflets-distribution',
        name: 'LeafletsDistribution',
        component: () => import('../views/category/LeafletsDistribution.vue'),
        meta: {
            title: generateMetaTitle('Leaflets Distribution'),
        },
    },
    {
        path: '/category/magazines-distribution',
        name: 'MagazinesDistribution',
        component: () => import('../views/category/MagazinesDistribution.vue'),
        meta: {
            title: generateMetaTitle('Magazines Distribution'),
        },
    },
    {
        path: '/category/essentials',
        name: 'Essentials',
        component: () => import('../views/category/Essentials.vue'),
        meta: {
            title: generateMetaTitle('Essentials'),
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
