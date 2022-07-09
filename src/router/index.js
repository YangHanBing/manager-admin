import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Layout from '../layout'
// import menu from './modules/menu'
// import user from './modules/user'
// import role from './modules/role'
// import dept from './modules/dept'
// import leave from './modules/leave'
// import approve from './modules/approve'

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
    path: '/system',
    name: 'system',
    component: Layout,
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'personnel'
    },
    children: [{
        path: '/system/user',
        component: () => import('../views/user'),
        name: 'user-query',
        meta: {
          title: '用户管理',
          icon: 'article'
        }
      },
      {
        path: '/system/role',
        component: () => import('../views/role'),
        name: 'role-query',
        meta: {
          title: '角色管理',
          icon: 'article'
        }
      },
      {
        path: '/system/menu',
        component: () => import('../views/menu'),
        name: 'menu-query',
        meta: {
          title: '菜单管理',
          icon: 'article'
        }
      },
      {
        path: '/system/dept',
        component: () => import('../views/dept'),
        name: 'dept-query',
        meta: {
          title: '部门管理',
          icon: 'article'
        }
      }
    ]
  },
  {
    path: '/audit',
    component: Layout,
    name: 'audit',
    redirect: '/audit/leave',
    meta: {
      title: '审批管理',
      icon: 'personnel'
    },
    children: [{
        path: '/audit/leave',
        component: () => import('../views/leave'),
        name: 'leave-query',
        meta: {
          title: '休假申请',
          icon: 'personnel'
        }
      },
      {
        path: '/audit/approve',
        component: () => import('../views/approve'),
        name: 'approve-query',
        meta: {
          title: '待审批',
          icon: 'personnel'
        }
      }
    ]
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
// export const privateRoutes = [
//   menu,
//   user,
//   role,
//   dept,
//   leave,
//   approve
// ]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
