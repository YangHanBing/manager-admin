import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// import layout from '../layout'

const routes = [{
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
