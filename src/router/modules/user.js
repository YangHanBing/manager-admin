import Layout from '../../layout'
export default {
  path: '/system',
  component: Layout,
  name: 'user-query',
  meta: {
    title: '系统管理',
    icon: 'personnel'
  },
  children: [{
    path: '/system/user',
    component: () => import('../../views/user'),
    meta: {
      title: '用户管理'
    }
  }]
}
