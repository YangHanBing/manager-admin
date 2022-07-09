import Layout from '../../layout'
export default {
  path: '/audit',
  component: Layout,
  name: 'approve-query',
  meta: {
    title: '待审批',
    icon: 'personnel'
  },
  children: [{
    path: '/audit/approve',
    component: () => import('../../views/approve'),
    meta: {
      title: '待审批'
    }
  }]
}
