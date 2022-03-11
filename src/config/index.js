let baseApi = ''
switch (process.env.NODE_ENV) {
    case 'development':
        baseApi = '/api' // 开发环境url
        break
    case 'product':
        baseApi = '/api' // 生产环境url
        break
    default:
        baseApi = '/api'
        break
}

module.exports = {
    baseApi
}
