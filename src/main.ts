import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import VueCountdown from './components/vue-countdown';
import Index from './pages/index.vue';
import Rule from './pages/rule.vue';
import RuleEn from './pages/rule_En.vue';
import Map from './pages/map.vue';
import App from './app.vue';
import VueI18n from './language'

const routes = [
  { path: '/', component: Index },
  { path: '/rule', component: Rule },
  { path: '/rule_En', component: RuleEn },
  { path: '/map', component: Map },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(VueI18n)
app.use(router);
app.component(VueCountdown.name, VueCountdown);
app.mount('#app');