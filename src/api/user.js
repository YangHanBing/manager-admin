import request from '@/utils/request';
// 登录接口
const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}
// 获取count接口
const getCount = () => {
  return request({
    url: '/leave/count',
    method: 'GET'
  })
}
// 获取路由接口
const getPermissionList = () => {
  return request({
    url: '/users/getPermissionList',
    method: 'GET'
  })
}
export default {
  login,
  getCount,
  getPermissionList
}
