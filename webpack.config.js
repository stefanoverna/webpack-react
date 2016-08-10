var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
var ASSETS_DIR = path.resolve(__dirname, 'assets');

var config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: ASSETS_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
