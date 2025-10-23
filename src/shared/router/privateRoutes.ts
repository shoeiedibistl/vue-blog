import { type RouteRecordRaw } from 'vue-router'
import PrivateLayout from '@/shared/layout/private-layout/PrivateLayout.vue'
import ProfilePage from '@/pages/profile-page/ProfilePage.vue'

const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PrivateLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: ProfilePage,
      },
    ],
  },
]

export default privateRoutes;
