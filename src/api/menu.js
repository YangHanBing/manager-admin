import request from '@/utils/request'
// 菜单列表接口
const getMenuList = () => {
  return request({
    url: '/menu/list',
    mathod: 'GET'
  })
}
// 菜单创建接口
const addMenu = (data) => {
  return request({
    url: '/menu/operate',
    mathod: 'POST',
    data
  })
}
// 菜单编辑接口
const editMenu = (data) => {
  return request({
    url: '/menu/operate',
    mathod: 'POST',
    data
  })
}
// 菜单删除接口
const delMenu = (data) => {
  return request({
    url: '/menu/operate',
    mathod: 'POST',
    data
  })
}
export default {
  getMenuList,
  addMenu,
  editMenu,
  delMenu
}
