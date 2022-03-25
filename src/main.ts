import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import VueCountdown from './components/vue-countdown';
import Index from './pages/index.vue';
import Rule from './pages/rule.vue';
import RuleEn from './pages/rule_En.vue';
import RuleKo from './pages/rule_Ko.vue';
import Map from './pages/map.vue';
import Table from './pages/table.vue';
import App from './app.vue';
import VueI18n from './language'
import { ElOption, ElSelect, ElIcon, ElPagination, ElLoading } from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'

const routes = [
  { path: '/', component: Index },
  { path: '/rule', component: Rule },
  { path: '/rule_En', component: RuleEn },
  { path: '/rule_Ko', component: RuleKo },
  { path: '/map', component: Map },
  { path: '/table', component: Table },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
const app = createApp(App);
app.use(VueI18n)
app.use(router);
app.component(ElOption.name, ElOption);
app.component(ElSelect.name, ElSelect);
app.component(ElIcon.name, ElIcon);
app.component(ElPagination.name, ElPagination);
app.use(ElLoading);
app.component(VueCountdown.name, VueCountdown);
app.mount('#app');