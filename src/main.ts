import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import VueCountdown from './components/vue-countdown';
import Index from './pages/index.vue';
import Rule from './pages/rule.vue';
import App from './app.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/rule', component: Rule },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.component(VueCountdown.name, VueCountdown);
app.mount('#app');
