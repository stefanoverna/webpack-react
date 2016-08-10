var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

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
        test: /\.sass$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
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
  },
  postcss: function() {
    console.log("CIAO");
    return [autoprefixer];
  }
};

module.exports = config;
