import Layout from '../../layout'
export default {
  path: '/audit',
  component: Layout,
  name: 'leave-query',
  meta: {
    title: '审批管理',
    icon: 'personnel'
  },
  children: [{
    path: '/audit/leave',
    component: () => import('../../views/leave'),
    meta: {
      title: '休假申请'
    }
  }]
}
