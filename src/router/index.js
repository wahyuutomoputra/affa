import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import MyTaskView from '../views/MyTaskView.vue'
import MailDetailView from '../views/MailDetailView.vue'
import AttachToWMSView from '../views/AttachToWMSView.vue'
import TrademarkView from '../views/TrademarkView.vue'
import TrademarkDetailView from '../views/TrademarkDetailView.vue'
import UploadDocumentView from '../views/UploadDocumentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router
