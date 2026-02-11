import { createRouter, createWebHistory } from 'vue-router'
import StorePage from '@views/StorePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: StorePage,
    },
  ],
})

export default router
