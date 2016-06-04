/* global __dirname */

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

var _appSource = path.resolve(__dirname, 'src');
var _appBuild = path.resolve(__dirname, 'public');

var _srcFilename = 'app.js';

var _jsSrcPath = path.join(_appSource, 'client', _srcFilename);

var PROD = (process.env.NODE_ENV === 'production') || 0;

module.exports = {
  entry: _jsSrcPath,
  output: {
    path: _appBuild,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: _appBuild,
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ],
  },
  plugins: [
    // Simply copies the files over
    new CopyWebpackPlugin([
      {
        from: _appSource,
      },
    ], {
      ignore: [
        { glob: 'client/**/*', dot: true },
      ],
    }),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'pretty-raffle',
        importScripts: ['sw-toolbox.js', 'runtime-caching.js'],
      }
    ),
  ],
  stats: {
    colors: true,
  },
  devtool: 'eval',
};
