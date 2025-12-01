import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import MyTaskView from '../views/task/MyTaskView.vue'
import MailDetailView from '../views/task/MailDetailView.vue'
import AttachToWMSView from '../views/task/AttachToWMSView.vue'
import TrademarkView from '../views/trademark/TrademarkView.vue'
import TrademarkDetailView from '../views/trademark/TrademarkDetailView.vue'
import UploadDocumentView from '../views/upload/UploadDocumentView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/my-task',
    name: 'my-task',
    component: MyTaskView,
  },
  {
    path: '/my-task/mail/:id',
    name: 'mail-detail',
    component: MailDetailView,
  },
  {
    path: '/my-task/mail/:id/attach',
    name: 'attach-to-wms',
    component: AttachToWMSView,
  },
  {
    path: '/trademark',
    name: 'trademark',
    component: TrademarkView,
  },
  {
    path: '/trademark/:refNumber',
    name: 'trademark-detail',
    component: TrademarkDetailView,
  },
  {
    path: '/upload-document',
    name: 'upload-document',
    component: UploadDocumentView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

