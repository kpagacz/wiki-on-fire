import { createApp } from 'vue'
import App from './App.vue'
import WofCard from './components/WofCard.vue';
import { createRouter, createWebHistory } from 'vue-router';

import WofIcon from './components/WofIcon.vue';
import WofHelloWorld from './components/WofHelloWorld.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: WofHelloWorld },
    ]
});

const app = createApp(App);
app.use(router);
app.component('WofCard', WofCard);
app.component('WofIcon', WofIcon);
app.mount('#app')
