const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const WebpackErrorNotificationPlugin = require('webpack-error-notification');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }
  }),
  new WebpackErrorNotificationPlugin(),
];

if (process.env.NODE_ENV == 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
    })
  );
}

module.exports = {
  entry: {
    bundle: __dirname + '/src/index.js',
  },
  resolve: {
    root: __dirname + '/src',
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/build/assets',
    filename: '[name].js',
    publicPath: '/assets',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + '/src',
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.json/,
        loaders: ['json']
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins,
  devtool: 'source-map',
  devServer: {
    port: 3000,
    inline: true,
    stats: 'minimal',
    historyApiFallback: {
      index: 'index.html'
    }
  },
};
