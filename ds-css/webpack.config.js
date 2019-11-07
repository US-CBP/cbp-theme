const path = require('path'); // this node module provides utilities for working with file and directory paths.
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map', // creates /dis/js/cbp-ds-bundle.js.map
  entry: './src/js/index.js', // entry module that injects dependent files
  // controls the devServer process and localhost port
  // devServer is short for 'webpack-dev-server'
  devServer: { // note: when running this, it will initially hide the /div/ folder by default, after which you can just run 'npm run build-webpack' to see the /dist/ folder locally
    // liveReload: true,   
    contentBase: path.join(__dirname, '../ds-ux-guidelines/'), // what directory to serve content from
    watchContentBase: true, // dev-server watches for changes to served files
    index: 'index.html', // acting as index from the 'contentBase' directory
    watchOptions: { // provides customizations for watch mode
  // this controls active watch mode for file changes w/in the directory containing the main source index.html file
    ignored: '/node_modules/',
      poll: true // creates a continous watch mode for devServer
      // anything imported into the src/js/index.js file is watched
    },
    compress: true, // compresses the HTTP requested files to .zip format
    port: 9000, // local hosting port assigned
    openPage: 'index.html', // this is default setting
    open: true, // opens browser once server has started
    overlay: { // creates dark overlay for high-contrast display
      warnings: true, // show any warnings
      errors: true // show any errors
    }
  },
  output: {
    path: path.resolve(__dirname, '../ds-ux-guidelines/dist'), // directory location for output files
    filename: 'js/cbp-ds-bundle.js' // name of compiled js build file 
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
            loader: 'resolve-url-loader', // provides the "url rewriting" that Sass is missing.
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

    // an HTML template is required to serve the bundle
    new HtmlWebpackPlugin({
      hash: false, // set to 'true' if needing unique ID's at end of file name
      title: 'Style Guide - CBP Style Guide',
      template: '../ds-ux-guidelines/index.html', // using default template engine
      filename: 'index.html',  // sets up new file
      inject: true, // default setting to place bundle.js file at bottom
      showErrors: true,
      minify: {
          removeComments: false,
          collapseWhitespace: false
      }
  }),
  new HtmlWebpackPlugin({
    template: '../ds-ux-guidelines/foundation/icons.html', // telling where to get the code to build the file from
    hash: false, // set to 'true' if needing unique ID's at end of file name
    filename: 'foundation/icons.html',
    inject: true, 
    showErrors: true,
    minify: {
        removeComments: false,
        collapseWhitespace: false
    }
}),

// new CopyPlugin([
//   { from: 'css/cbp-ds.min.css', to: '../.././ds-css/dist/css/' },
// ]),

// new CopyPlugin([
//   { from: 'css/cbp-ds.min.css', to: '.././ds-css/dist/css/' },
// ]),

new HtmlWebpackTagsPlugin({ tags: ['../css/styles.css', '../js/scripts.js'], append: true }), 

new StylelintPlugin({

  "options": {
    config: '.stylelintrc',
    files: '**/*.s?(a|c)ss',
    formatter: 'string',
    cache: true, // only changed files get linted
    // cacheLocation: './tests/',
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
