import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// import layout from '../layout'
import menu from './modules/menu'
import user from './modules/user'
import role from './modules/role'
import dept from './modules/dept'
import leave from './modules/leave'
import approve from './modules/approve'

export const routes = [{
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('../layout'),
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
        icon: 'el-icon-s-home'
      },
      component: () => import('../views/home')
    }]
  },
  {
    path: '/404',
    component: () => import('../views/error-page/404')
  },
  {
    path: '/401',
    component: () => import('../views/error-page/401')
  }
]
// 私有路由表
export const privateRoutes = [
  menu,
  user,
  role,
  dept,
  leave,
  approve
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
