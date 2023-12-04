
const AUTHOR_NAME='Mostefa Boudjema';
function generateMetaTitle(routeName, projectType) {
  return `${AUTHOR_NAME} - ${projectType? projectType+' ':''}${routeName}`;
}
export default [
  {
    path: '/',
    name: "Basic",
    component: () => import('../layouts/FrontendLayout.vue'),
    redirect: "/",
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('~frontend/views/Home.vue'),
        meta: {
          title: generateMetaTitle('Home'),
        },
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('~frontend/views/Products.vue'),
        meta: {
          title: generateMetaTitle('Products'),
        },
      },
      {
        path: '/products-2',
        name: 'Products2',
        component: () => import('~frontend/views/Products-2.vue'),
        meta: {
          title: generateMetaTitle('Products'),
        },
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('~frontend/views/About.vue'),
        meta: {
          title: generateMetaTitle('About'),
        },
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('~frontend/views/Contact.vue'),
        meta: {
          title: generateMetaTitle('Contact'),
        },
      },
      {
        path: '/testimonials',
        name: 'Testimonials',
        component: () => import('~frontend/views/Testimonials.vue'),
        meta: {
          title: generateMetaTitle('Testimonials'),
        },
      },
      {
        path: '/postcode',
        name: 'Postcode',
        component: () => import('~frontend/views/Postcode.vue'),
        meta: {
          title: generateMetaTitle('Postcode'),
        },
      },
      {
        path: '/category/home-delivery',
        name: 'HomeDelivery',
        component: () => import('~frontend/views/category/HomeDelivery.vue'),
        meta: {
          title: generateMetaTitle('Home Delivery'),
        },
      },
      {
        path: '/category/business-delivery',
        name: 'BusinessDelivery',
        component: () => import('~frontend/views/category/BusinessDelivery.vue'),
        meta: {
          title: generateMetaTitle('Business Delivery'),
        },
      },
      {
        path: '/category/leaflets-distribution',
        name: 'LeafletsDistribution',
        component: () => import('~frontend/views/category/LeafletsDistribution.vue'),
        meta: {
          title: generateMetaTitle('Leaflets Distribution'),
        },
      },
      {
        path: '/category/magazines-distribution',
        name: 'MagazinesDistribution',
        component: () => import('~frontend/views/category/MagazinesDistribution.vue'),
        meta: {
          title: generateMetaTitle('Magazines Distribution'),
        },
      },
      {
        path: '/category/essentials',
        name: 'Essentials',
        component: () => import('~frontend/views/category/Essentials.vue'),
        meta: {
          title: generateMetaTitle('Essentials'),
        },
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../Auth/Login.vue'),
        meta: {
          title: generateMetaTitle('Login'),
        },
      },
    ]
  },

  {
    path: '/:catchAll(.*)',
    component: () => import('~frontend/views/404.vue'),
  },
]
