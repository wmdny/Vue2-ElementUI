import request from '@/utils/request'

const curryRequest = (url, method,data) => {
  return request(`/menu/${url}`, method, data)
}
//
export function userPermission(data){
  return curryRequest('menuTree','post',data)
}

