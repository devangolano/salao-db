import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: () => import('../views/PrincipalView.vue')
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('../views/ServicosView.vue')
    },
    {
      path: '/agendar',
      name: 'agendar',
      component: () => import('../views/AgendarView.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue')
    }
  ]
});

export default router;
