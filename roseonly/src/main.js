import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './router.config';
const router = new VueRouter(routes);

import store from './store/index';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
