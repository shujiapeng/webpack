const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: './'
  },
  devtool: 'source-map',
  plugins: [
    // 防止未被修改的文件的hash发生变化
    new webpack.HashedModuleIdsPlugin()
  ]
})