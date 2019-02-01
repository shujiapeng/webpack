packjson 说明

// 通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export
// false 时 所有文件都可以 安全地删除文件中未使用的部分
// 传入数组表示数组里面的文件不可以安全删除未使用部分
"sideEffects": false


// 清理dist文件夹的插件，会把历史生成的文件删掉，留下要用的 使用时传入数组，数组中是要清理的文件目录
// 如 new CleanWebpackPlugin(['dist']),
"clean-webpack-plugin": "^1.0.1",

// node.js 的Web应用框架
"express": "^4.16.4",

// 自动生成html的插件 https://github.com/jantimon/html-webpack-plugin
"html-webpack-plugin": "^3.2.0",

// 中间件  将webpack编译后的文件传递给一个服务器
// webpack-dev-server 就是内置使用的它 具体使用查看server.js
"webpack-dev-middleware": "^3.5.1",

// webpack 服务器，内置了webpack-dev-middleware 可以直接使用，不用自己配置
"webpack-dev-server": "^3.1.14",

// 将webpack.config.js 分开（按照开发配置，发布配置，通用配置）
"webpack-merge": "^4.2.1"
