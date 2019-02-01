// node.js 的Web应用框架
const express = require('express')
const webpack = require('webpack')
// 中间件  将webpack编译后的文件传递给一个服务器
// webpack-dev-server 就是使用的它
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

// 服务器监听 8082端口
app.listen(8082, () => {
  console.log('正在监听8082端口')
})