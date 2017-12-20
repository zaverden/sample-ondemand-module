const path = require('path');

module.exports = [{
  entry: '.\\module\\m0.es6',
  output: {
    filename: 'mx.js',
    library: 'mx',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, '.build')
  },
  externals: {
    lodash: 'lodash'
  },
  module: {
    rules: [
      { test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
},{
  entry: ['babel-polyfill', '.\\client\\main.es6'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.build')
  },
  module: {
    rules: [
      { test: /\.es6$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}];
