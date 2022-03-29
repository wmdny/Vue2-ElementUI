import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  return request(`/role/${url}`, method, data)
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



