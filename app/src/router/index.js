import { createRouter, createWebHistory } from 'vue-router'
import FoodList from '@/Views/FoodList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/food',
      name: 'home',
      component: FoodList,
    },
  ],
})

export default router
