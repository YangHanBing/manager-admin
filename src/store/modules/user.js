import User from '../../api/user'
import {
  setItem,
  getItem
} from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    count: '',
    permissionList: ''
  },
  mutations: {
    setToken(state, res) {
      state.token = res
      setItem('token', res)
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
      commit('setToken', response)
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
    }
  }
}
