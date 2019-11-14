const path = require('path'); // this node module provides 
// utilities for working with file and directory paths
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  performance: {
    hints: "error", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: 'source-map', // creates || updates 'dist/css/cbp-ds.min.css.map' & js/cbp-ds-bundle.js.map' files
  entry: './src/js/index.js', // entry module that injects dependent files
  output: {
    path: path.resolve(__dirname, 'dist'), // directory location for output files
    filename: "../js/cbp-ds-bundle.js"
  },

  module: {
    rules: [
      {
      test: /\.(sa|sc|c)ss$/, // test covers both sass and css file types
      use: [ 
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader', // interprets @import and url() like import/require() and will resolve them
          },
          {
            loader: 'resolve-url-loader', // provides the "url rewriting" that Sass is missing
          },
          {
            loader: 'sass-loader', // Loads a Sass/SCSS file and compiles it to CSS
            options: {
              sourceMap: true,
              implementation: require('sass'), // Prefer `dart-sass`
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

    new MiniCssExtractPlugin({ // extracts CSS into separate files per JS file that contains CSS
      // also generates a min.css.map file
      // note: this is not creating the unminified .css file, another tool does that for now
      ignoreOrder: false, // enable to remove warnings about any possible conflict
      //CSS in separate location for distribution
      filename: "css/cbp-ds.min.css",
    }),

new StylelintPlugin({

  "options": {
    config: '.stylelintrc',
    files: '**/*.s?(a|c)ss',
    formatter: 'string',
    cache: true, // only changed files get linted
    reportInvalidScopeDisables: true,
    syntax: 'scss',
    fix: true,
    output: true,
    failOnError: false
  }

  })
]
}