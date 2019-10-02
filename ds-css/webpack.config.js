

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  devtool: 'source-map', // any "source-map"-like devtool is possible
  entry: './src/js/index.js',
  // controls the devServer process and localhost port
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/cbp-ds-bundle.js'
  },

  watch: true,

  module: {
    rules: [
      {
      // test: /\.scss$/,
      // below test covers both sass and css file types
      test: /\.(sa|sc|c)ss$/,
      use: [
          
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          },
        ]
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],
          cacheDirectory: true,
        }
      }
    },
  ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      hash: true,
      title: 'CBP-DS Theme Website',
      template: './src/index.html',
      inject: true,
      minify: {
          removeComments: false,
          collapseWhitespace: false
      }
  }),
    new MiniCssExtractPlugin({
      ignoreOrder: false, //enable to remove warnings about any possible conflict
      filename: 'css/[name].bundle.css'
    }),

    new OptimizeCssAssetsPlugin({
      // assetNameRegExp: /\.optimize\.css$/g,
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })

  ],

};