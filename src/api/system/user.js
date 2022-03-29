import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  return request(`/user/${url}`, method, data)
}
// 登录
export function apiLogin(data){
  return curryRequest('login','post',data)
}
// 退出登录
export function apiLogout(){
  return curryRequest('logout','get')
}
// 修改密码
export function apiChangePassword(data){
  return curryRequest('changePassword','post',data)
}
// 获取详情
export function apiGetDetail(data){
  return curryRequest('info','post',data)
}
// 获取列表
export function apiGetList(data){
  return curryRequest('list','post',data)
}
// 新增、更新
export function apiUpdate(data){
  return curryRequest('save','post',data)
}
// 删除
export function apiDel(data){
  return curryRequest('del','post',data)
}



