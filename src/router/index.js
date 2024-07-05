import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/controllers',
      name: 'controlles',
      component: () => import('../views/ControllersView.vue')
    },
    {
      path: '/views',
      name: 'views',
      component: () => import('../views/ViewsView.vue')
    },
    {
      path: '/router',
      name: 'router',
      component: () => import('../views/RouterView.vue')
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: () => import('../views/ConfigurationView.vue')
    },
    {
      path: '/cache',
      name: 'cache',
      component: () => import('../views/CacheView.vue')
    },
    {
      path: '/database',
      name: 'database',
      component: () => import('../views/DatabaseView.vue')
    }
  ]
})

export default router
