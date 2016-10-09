var path = require('path');
var webpack = require('webpack');

// TODO process.env.NODE_ENV === production||development
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/main'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    publicPath: '/public/'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'My App',
    //   filename: 'assets/admin.html'
    // }),
    // new FaviconsWebpackPlugin('my-logo.png')
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
        loader: 'style!css'
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000&name=files/[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  }
};
