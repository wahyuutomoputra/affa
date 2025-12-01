import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/DashboardView.vue'),
  },
  {
    path: '/my-task',
    name: 'my-task',
    component: () => import('../views/task/MyTaskView.vue'),
  },
  {
    path: '/my-task/mail/:id',
    name: 'mail-detail',
    component: () => import('../views/task/MailDetailView.vue'),
  },
  {
    path: '/my-task/mail/:id/attach',
    name: 'attach-to-wms',
    component: () => import('../views/task/AttachToWMSView.vue'),
  },
  {
    path: '/trademark',
    name: 'trademark',
    component: () => import('../views/trademark/TrademarkView.vue'),
  },
  {
    path: '/trademark/:refNumber',
    name: 'trademark-detail',
    component: () => import('../views/trademark/TrademarkDetailView.vue'),
  },
  {
    path: '/upload-document',
    name: 'upload-document',
    component: () => import('../views/upload/UploadDocumentView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

