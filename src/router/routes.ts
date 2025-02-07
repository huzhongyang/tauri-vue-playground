import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/about',
    component: () => import('../pages/about.vue'),
  },
]
