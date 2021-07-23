import { createWebHistory, createRouter } from 'vue-router';
import Routing from '../components/Routing.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('../pages/home.vue'),
    },
    {
        name: 'Authentication',
        path: '/auth',
        component: () => import('../components/Auth.vue'),
    },
    {
        name: 'Icons',
        path: '/icons',
        component: () => import('../pages/icons.vue'),
    },
    {
        name: 'Settings',
        path: '/settings',
        component: Routing,
        children: [
            {
            name: 'All Settings',
            path: '',
            component: () => import('../pages/settings.vue'),
        },
        {
            name: 'General Settings',
            path: 'general',
            component: () => import('../pages/settings-general.vue'),
        },
    ]
    },
    {
        name: 'Customers',
        path: '/customers',
        component: Routing,
        children: [
            {
                name: 'Customers List',
                path: '',
                component: () => import('../pages/customers.vue'),
            },
            {
                name: 'Customer',
                path: ':id',
                component: () => import('../pages/customer.vue'),
                props: true
            },
        ]
    },
    {
        name: 'Products',
        path: '/products',
        component: Routing,
        children: [
            {
                name: 'Products List',
                path: '',
                component: () => import('../pages/products.vue'),
            },
            {
                name: 'Product',
                path: ':id',
                component: () => import('../pages/product.vue'),
                props: true
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'active',
});

export default router;