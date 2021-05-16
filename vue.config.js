module.exports = {
    // publicPath: 公共路径，主要作用是资源的路径，就是index.html使用什么地址去找css js等
    // 默认值是'/' 就是服务器跟地址 假如你的服务器地址是https://<USERNAME>.github.io</REPO> 那么publucpath默认地址就是 https://<USERNAME>.github.io/ , 当你的index.html导入资源的时候路径就是错误的
    // 要区分生产环境和开发环境 只有在部署的时候也就是生产环境下需要设置publicPath 
    publicPath: process.env.NODE_ENV === 'production'
    ? '/cnode/'
    : '/'
}