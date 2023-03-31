import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/rockets',
      name: 'rockets',
      component:  () => import('../views/RocketsView.vue')
    },
    {
      path: '/testimonials',
      name: 'testemionals',
      component:  () => import('../views/TestimonialsView.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component:  () => import('../views/ContactUsView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
