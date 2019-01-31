const path = require('path')
// 自动生成html的插件 https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清理dist文件夹的插件，会把历史生成的文件删掉，留下要用的
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      name: 'index.html',
      title: 'wepack demo',
      meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    })
  ],
  devtool: 'inline-source-map',
  // webpack-dev-server 带有许多可配置的选项 了解更多：https://www.webpackjs.com/configuration/dev-server/
  devServer: {
    contentBase: './dist'
  }
}