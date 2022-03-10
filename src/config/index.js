let baseApi = ''
switch (process.env.NODE_ENV) {
    case 'development':
        baseApi = '/api' // 开发环境url
        break
    case 'product':
        baseApi = '' // 生产环境url
        break
    default:
        baseApi = ''
        break
}

module.exports = {
    baseApi
}
