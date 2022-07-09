import Layout from '../../layout'
export default {
  path: '/system',
  component: Layout,
  name: 'dept-query',
  meta: {
    title: '部门管理',
    icon: 'personnel'
  },
  children: [{
    path: '/system/dept',
    component: () => import('../../views/dept'),
    meta: {
      title: '部门管理'
    }
  }]
}
