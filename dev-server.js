

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config')
const options = {
  contentBase: './list',
  hot: true,
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)

const server = new webpackDevServer(compiler, options)

server.listen(8080, () => {
  console.log('服务器启动成功\n')
  console.log('服务器正在监听8080端口')
})
