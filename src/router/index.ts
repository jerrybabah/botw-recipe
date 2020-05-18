import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import Home from '../views/Home.vue';
import Foods from '../views/Foods.vue';
import Materials from '../views/Materials.vue';
import Cook from '../views/Cook.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/foods',
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods,
  },
  {
    path: '/materials',
    name: 'Materials',
    component: Materials,
  },
  {
    path: '/cook',
    name: 'Cook',
    component: Cook,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
