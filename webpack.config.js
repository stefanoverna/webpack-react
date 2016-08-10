var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: [ 'eslint' ]
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loaders: [ 'babel' ]
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};

module.exports = config;
