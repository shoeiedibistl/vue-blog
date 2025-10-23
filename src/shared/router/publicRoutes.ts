import { type RouteRecordRaw } from 'vue-router'
import PublicLayout from '@/shared/layout/public-layout/PublicLayout.vue'
import HomePage from '@/pages/home-page/HomePage.vue'

const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PublicLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: '',
        name: 'home',
        component: HomePage,
      },
      {
        path: 'ui',
        name: 'ui',
        component: () => import('@/pages/ui-page/UiPage.vue'),
      },
    ],
  },
]


export default publicRoutes;