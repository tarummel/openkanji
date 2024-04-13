import { createApp } from 'vue'
import './global.css'
import { createMemoryHistory, createRouter } from 'vue-router';

import App from './App.vue'
import Home from './components/views/Home.vue'


function main() {
    const app = createApp(App);

    const routes = [
        { path: '/', component: Home}
    ];

    const router = createRouter({
        history: createMemoryHistory(),
        routes,
    });

    app.use(router);

    app.mount('#app')
};

main();