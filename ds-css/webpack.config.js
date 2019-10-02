

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  // controls the devServer process and localhost port
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    }]
  },
  plugins: [
// pushes current version of the 'src/index.html' file &
// any of the object.property.value(s) used from below within the 'src/index.html' file to 'dist/index.html' version
    new HtmlWebpackPlugin({
      title: 'CBP-DS THEME TEST SITE',
      template: './src/index.html',
      inject: true,
      minify: {
          removeComments: true,
          collapseWhitespace: false
      }
  }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css'
    }),
  ]
};