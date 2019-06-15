const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');

module.exports = {
  // JS 执行入口文件
  entry: {
    // 把 React 相关的放到一个单独的动态链接库
    react: [
      'react',
      'react-dom',
      'antd',
      'react-router',
      'redux',
      'react-redux'
    ],
    // 把项目需要所有的 polyfill 放到一个单独的动态链接库
    polyfill: ['core-js/fn/object/assign', 'core-js/fn/promise', 'whatwg-fetch']
  },
  output: {
    // 输出的文件都放到 build_client 目录下
    path: path.resolve(__dirname, 'build_client', 'js'),
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，
    // 也就是 entry 中配置的 react 和 polyfill
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    pathinfo: true,
    // 存放动态链接库的全局变量名称，例如对应 react 来说就是 react_dll
    // 之所以在前面加上 dll_ 是为了防止全局变量冲突
    library: '[name]_dll'
  },
  plugins: [
    // 接入 DllPlugin
    new DllPlugin({
      // manifest.json文件的输出路径，这个文件会用于后续的业务代码打包；
      path: path.join(__dirname, 'build_dll', '[name]-manifest.json'),
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: '[name]_dll',
      // 解析包路径的上下文，这个要跟接下来配置的 webpack.config.js 一致。
      context: path.resolve(__dirname, 'src', 'app')
    })
  ]
};
