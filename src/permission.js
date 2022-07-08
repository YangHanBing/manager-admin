// 页面鉴权
import router from './router'
import store from './store'
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      // const count = store.getters.count
      const permission = store.getters.permissionList
      if (permission) {
        next()
      } else {
        const countList = await store.dispatch('user/getCount')
        const permissionList = await store.dispatch('user/getPermissionList')
        if (countList && permissionList) {
          next(to.path)
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
// const response = await store.dispatch('user/getCount')
// const {
//   actionList
// } = await store.dispatch('user/getPermissionList')
// if (response && actionList) {
//   const routes = await store.dispatch('permission/filterRoutes', authoritys)
//   if (routes) {
//     routes.forEach(item => {
//       router.addRoute(item)
//     })
//     return next(to.path)
//   }
// } else {
//   next('/login')
// }
