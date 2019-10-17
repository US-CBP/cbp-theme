
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: 'source-map',
   // this creates the /dis/js/cbp-ds-bundle.js.map file
  entry: './src/js/index.js',
  // controls the devServer process and localhost port
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    watchOptions: {
      poll: true
      // this controls active watch mode for file changes
    },
    watchContentBase: true,
    compress: true,
    port: 9000,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/cbp-ds-bundle.js'
  },


  // watch: true,


  module: {
    rules: [
      {
      // below test covers both sass and css file types
      test: /\.(sa|sc|c)ss$/,
      use: [
          
          MiniCssExtractPlugin.loader,
          
          {
            loader: 'css-loader',
            // options: {
            //   sourceMap: true
            // }
          },
          {
            loader: 'resolve-url-loader',
            // provides the "url rewriting" that Sass is missing.
            options: { // options...
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
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
    new webpack.ProgressPlugin(), // show build progress details
    new CleanWebpackPlugin(),  // keeps track of all files in dist/

    new HtmlWebpackPlugin({
      entry: './src/index.html',
      hash: false, // set to 'true' if needing unique ID's at end of file name
      title: 'CBP-DS Theme Website',
      template: './src/index.html', // this will auto parse template as well
      inject: true,
      minify: {
          removeComments: false,
          collapseWhitespace: false
      }
  }),
    new MiniCssExtractPlugin({
      ignoreOrder: false, //enable to remove warnings about any possible conflict
      filename: 'css/cbp-ds.min.css'
      // chunkFilename: 'css/cbp-ds.min.css.map'
    }),

    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { 
          
          discardComments: { 
          removeAll: true } 
        }],
      },
      canPrint: true
    }),

    new StylelintPlugin({

  "options": {
    config: '.stylelintrc',
    files: './src/styles/custom/**/*.scss',
    formatter: 'string',
    cache: true, // only changed files get linted
    cacheLocation: './tests/',
    reportInvalidScopeDisables: true,
    // ignorePath: './.stylelintignore',
    syntax: 'scss',
    fix: true,
    output: true,
    failOnError: false
  }

  })

]
}