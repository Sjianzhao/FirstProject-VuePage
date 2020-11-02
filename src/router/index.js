import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home/',
    component: Home,
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/Map.vue'),
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue'),
  },
  {
    path: '/HistoryData',
    name: 'HistoryData',
    component: () => import('../views/HistoryData.vue'),
  },
  {
    path: '/Graph',
    name: 'Graph',
    component: () => import('../views/Graph.vue'),
  },
  {
    path: '/ConJourn',
    name: 'ConJourn',
    component: () => import('../views/ConJourn.vue'),
  },
  {
    path: '/DevIndex',
    name: 'DevIndex',
    component: () => import('../views/DevIndex.vue'),
  },
  {
    path: '/DevMean',
    name: 'DevMean',
    component: () => import('../views/DevMean.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
