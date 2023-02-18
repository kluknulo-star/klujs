/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/people',
            component: () => import('./components/Person/Index.vue'),
            name: 'person.index'
        },
        {
            path: '/people/create',
            component: () => import('./components/Person/Create.vue'),
            name: 'person.create'

        },
        {
            path: '/people/:id/show',
            component: () => import('./components/Person/Show.vue'),
            name: 'person.show'
        },
        {
            path: '/people/:id/edit',
            component: () => import('./components/Person/Edit.vue'),
            name: 'person.edit'
        }
    ]
})

export default router

