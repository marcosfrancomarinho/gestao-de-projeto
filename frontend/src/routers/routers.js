import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import RegisterProduct from '../components/RegisterProduct.vue';
import ShowProduct from '../components/ShowProduct.vue';

export const routes = createRouter({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/produtos/novo',
      component: RegisterProduct,
    },
    {
      path: '/produtos',
      component: ShowProduct,
    },
  ],
  history: createWebHistory(),
});
