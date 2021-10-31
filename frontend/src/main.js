import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

import WofHelloWorld from './components/WofHelloWorld.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WofHelloWorld },
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app')
