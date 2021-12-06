import { createApp } from 'vue'
import App from './App.vue'
import WofCard from './components/WofCard.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store.js';


import WofHelloWorld from './components/WofHelloWorld.vue';
import RegisterPage from './pages/RegisterPage.vue';
import LoginPage from './pages/LoginPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WofHelloWorld },
        { path: '/login', component: LoginPage },
        { path: '/user/:userLogin', redirect: '/' },
        { path: '/register', component: RegisterPage },
    ]
});

import WofIcon from './components/WofIcon.vue';
import WofButton from './components/WofButton.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component("WofButton", WofButton);
app.component('WofCard', WofCard);
app.component('WofIcon', WofIcon);
app.mount('#app')
