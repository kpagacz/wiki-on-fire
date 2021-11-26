import { createApp } from 'vue'
import App from './App.vue'
import WofCard from './components/WofCard.vue';
import { createRouter, createWebHistory } from 'vue-router';


import WofHelloWorld from './components/WofHelloWorld.vue';
import RegisterPage from './pages/RegisterPage.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WofHelloWorld },
        { path: '/login', redirect: '/' },
        { path: '/user/:userLogin', redirect: '/' },
        { path: '/register', component: RegisterPage },
    ]
});

import WofIcon from './components/WofIcon.vue';
import WofButton from './components/WofButton.vue';

const app = createApp(App);
app.use(router);
app.component("WofButton", WofButton);
app.component('WofCard', WofCard);
app.component('WofIcon', WofIcon);
app.mount('#app')
