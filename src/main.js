import Vue from 'vue';
import 'bulma/css/bulma.min.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('toUAH', (amount) => {
  return (amount / 100).toFixed(2);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
