const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  plugins: [
    // 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
    new webpack.NamedModulesPlugin(),
    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  // webpack-dev-server 带有许多可配置的选项 了解更多：https://www.webpackjs.com/configuration/dev-server/
  devServer: {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
  }
})