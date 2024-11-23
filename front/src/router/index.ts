import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ActivitiesView from "@/views/ActivitiesView.vue";
import ResidenceView from '@/views/ResidenceView.vue';
import HousesView from "@/views/HousesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/activites/:activity',
      name: 'activities',
      component: ActivitiesView
    },
    {
      path: '/decouvrir/la-residence',
      name: 'residence',
      component: ResidenceView
    },
    {
      path: '/decouvrir/les-maisons',
      name: 'maisons',
      component: HousesView
    }
  ]
})

export default router
