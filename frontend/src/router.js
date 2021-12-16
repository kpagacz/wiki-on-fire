import { createRouter, createWebHistory } from 'vue-router';
import store from './store.js';

import WofHelloWorld from './components/WofHelloWorld.vue';
import RegisterPage from './pages/RegisterPage.vue';
import LoginPage from './pages/LoginPage.vue';
import UserPage from './pages/UserPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WofHelloWorld },
        { path: '/login', component: LoginPage, meta: {requiresUnAuth: true}},
        { path: '/user/:userLogin', component: UserPage, props: true, meta: {requiresAuth: true}},
        { path: '/register', component: RegisterPage, meta: {requiresUnAuth: true} },
        { path: '/:notFound(.*)', redirect: '/' }
    ]
});

router.beforeEach((to, _, next) => {
    if(to.meta.requiresAuth && store.getters.isAuth) {
        next('/login');
    } else if(to.meta.requiresUnAuth && store.getters.isAuth) {
        next('/');
    } else {
        next();
    }
})

export default router;