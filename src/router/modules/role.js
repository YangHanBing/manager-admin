import Layout from '../../layout'
export default {
  path: '/system',
  component: Layout,
  name: 'role-query',
  meta: {
    title: '角色管理',
    icon: 'personnel'
  },
  children: [{
    path: '/system/role',
    component: () => import('../../views/role'),
    meta: {
      title: '角色管理'
    }
  }]
}
