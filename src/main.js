import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

// Using the vue use to load the resources that Vue is going to use in the application
Vue.use(VueRouter);
Vue.use(VueResource);

// Setting the root for saving the data to the database with Vue Resource
Vue.http.options.root = 'https://vuejs-stock-trader-b7838.firebaseio.com/';

// Using the vue filter to create a currency filter
Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

// Setting up the vuew router with options
const router = new VueRouter({
  mode: 'history',
  routes
});

// Creating the new Vue instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
