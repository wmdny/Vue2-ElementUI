const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    // webpack-dev-server配置
    devServer: {
        open: false, //编译完是否自动打开网页
        host: '0.0.0.0', //指定使用地址，默认localhost，0.0.0.0代表可以被外界访问
        port: 8080,  // web网页端口号
        https: false,//编译失败时刷新页面
        hot: true, //开启热加载
        hotOnly: false,
        //设置代理
        // 配置不同的后台API地址
        proxy: {
            '/api': {
                target: 'http://localhost:8888',  // 后台接口
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        name: 'Vue2x测试项目',
        // it can be accessed in index.html to inject the correct title.
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {
        //预加载 it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // to ignore runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ])
        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')

    }
}
