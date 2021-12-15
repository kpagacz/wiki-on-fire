import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js';
import router from './router.js';

import WofCard from './components/WofCard.vue';
import WofIcon from './components/WofIcon.vue';
import WofButton from './components/WofButton.vue';

import WofIcon from './components/WofIcon.vue';
import WofButton from './components/WofButton.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component("WofButton", WofButton);
app.component('WofCard', WofCard);
app.component('WofIcon', WofIcon);
app.mount('#app');
