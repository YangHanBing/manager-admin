import request from '@/utils/request'
// 部门列表接口
const getDeptList = () => {
  return request({
    url: '/dept/list',
    mathod: 'GET'
  })
}
// 部门创建接口
const addDept = (data) => {
  return request({
    url: '/dept/operate',
    mathod: 'POST',
    data
  })
}
// 部门编辑接口
const editDept = (data) => {
  return request({
    url: '/dept/operate',
    mathod: 'POST',
    data
  })
}
// 部门删除接口
const delDept = (data) => {
  return request({
    url: '/dept/operate',
    mathod: 'POST',
    data
  })
}
export default {
  getDeptList,
  addDept,
  editDept,
  delDept
}
