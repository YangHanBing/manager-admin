import axios from 'axios'
import store from '../store'
import {
  ElMessage
} from 'element-plus'
// 引入loading加载
import loading from './loading'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    loading.open()
    // 将token发送给后台
    const token = store.getters.userInfo.token
    if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  })
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    loading.close()
    // 对响应的结果进行加工
    if (res.data.code === 200) {
      return res.data.data
    }
  },
  (err) => {
    _showError(err.msg)
    return Promise.reject(err)
  })
// 将请求都变成data传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}
export default request
