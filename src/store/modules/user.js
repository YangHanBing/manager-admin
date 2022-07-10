import User from '../../api/user'
import {
  setItem,
  getItem,
  removeItem
} from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    userInfo: getItem('userInfo') || '',
    count: '',
    permissionList: ''
  },
  mutations: {
    setUserInfo(state, res) {
      state.userInfo = res
      setItem('userInfo', res)
    },
    setCount(state, count) {
      state.count = count
    },
    setPermissionList(state, permissionList) {
      state.permissionList = permissionList
    }
  },
  actions: {
    async login({
      commit
    }, payload) {
      const response = await User.login(payload)
      commit('setUserInfo', response)
    },
    async getCount({
      commit
    }) {
      const response = await User.getCount()
      commit('setCount', response)
      return response
    },
    async getPermissionList({
      commit
    }) {
      const response = await User.getPermissionList()
      commit('setPermissionList', response)
      console.log(response);
      return response
    },
    // 删除本地和vuex的token和用户信息
    async logout({
      commit
    }) {
      // const response = await User.logout()
      // resetRouter()
      commit('setUserInfo', '')
      commit('setPermissionList', '')
      removeItem('userInfo')
      // return response
    }
  }
}
