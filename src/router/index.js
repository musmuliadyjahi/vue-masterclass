import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/PageHome.vue';
import Thread from '../views/PageThreadShow.vue';
import NotFound from '../views/PageNotFound.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/thread/:id',
    name: 'Thread',
    component: Thread,
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  // Untuk menghiangkan tanda # pada link
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
