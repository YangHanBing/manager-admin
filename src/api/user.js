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
// 获取用户列表接口
const getUserList = () => {
  return request({
    url: '/users/list',
    method: 'GET'
  })
}
// 所有用户列表接口
const getUserAllList = () => {
  return request({
    url: '/users/all/list',
    method: 'GET'
  })
}
// 用户创建接口
const addUser = (data) => {
  return request({
    url: '/users/operate',
    method: 'POST',
    data
  })
}
// 用户编辑接口
const editUser = (data) => {
  return request({
    url: '/users/operate',
    method: 'POST',
    data
  })
}
// 用户删除与批量删除接口
const delUser = (data) => {
  return request({
    url: '/users/delete',
    method: 'POST',
    data
  })
}
// 用户权限列表接口
const getUserPermission = () => {
  return request({
    url: '/users/getPermissionList',
    method: 'GET'
  })
}
export default {
  login,
  getCount,
  getPermissionList,
  getUserList,
  getUserAllList,
  addUser,
  editUser,
  delUser,
  getUserPermission
}
