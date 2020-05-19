const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: 'html-loader' },
      { test: /\.(scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: 'file-loader' }] },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
