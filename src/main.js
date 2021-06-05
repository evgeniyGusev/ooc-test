import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router'
import generalComponents from '@/plugins/generalComponents';

import '@/assets/styles/global.scss';

Vue.config.productionTip = false;
generalComponents();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
