const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: ['react']
  },
  output: {
    path: './build',
    filename: '[name].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('dll', '[name].manifest.json'),
      name: '[name]_library' // 这里的命名要遵循变量命名规范，它是最终的包变量名
    })
  ]
};
