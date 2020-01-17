import Vue from 'vue';
import App from './App.vue';
import components from './components/index';
Vue.use(components);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
