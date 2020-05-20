import Vue from 'vue';
import VuePwaInstallPlugin from 'vue-pwa-install';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VuePwaInstallPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
