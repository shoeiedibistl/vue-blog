import { createRouter, createWebHistory, type RouteRecordRaw, type Router } from 'vue-router'
import publicRoutes from './publicRoutes'
import privateRoutes from './privateRoutes'
//import { setupAuthGuard } from './authGuard'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes] as RouteRecordRaw[],
})

//setupAuthGuard(router)

export default router
