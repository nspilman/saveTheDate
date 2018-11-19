import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from './routes.js';

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

Vue.use(VueRouter)

new Vue({
  router:router,
  render: h => h(App),
}).$mount("#app");