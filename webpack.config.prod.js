var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/main'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: './public/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000&name=[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  }
};