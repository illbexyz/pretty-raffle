/* global __dirname */

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var _appSource = path.resolve(__dirname, 'src');
var _appBuild = path.resolve(__dirname, 'dist');

var _srcFilename = 'app.js';

var _jsSrcPath = path.join(_appSource, 'client', _srcFilename);

module.exports = {
  entry: _jsSrcPath,
  output: {
    path: _appBuild,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: _appBuild,
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
