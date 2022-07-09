import Layout from '../../layout'
export default {
  path: '/system',
  component: Layout,
  name: 'menu-query',
  meta: {
    title: '菜单管理',
    icon: 'personnel'
  },
  children: [{
    path: '/system/menu',
    component: () => import('../../views/menu'),
    meta: {
      title: '菜单管理'
    }
  }]
}
