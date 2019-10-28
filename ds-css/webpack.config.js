const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map', // creates /dis/js/cbp-ds-bundle.js.map
  entry: './src/js/index.js', // entry module that injects dependent files
  // controls the devServer process and localhost port
  // devServer is short for 'webpack-dev-server'
  devServer: { // note: when running this, it will initially hide the /div/ folder by default, after which you can just run 'npm run build-webpack' to see the /dist/ folder locally   
    contentBase: path.join(__dirname, 'dist'), // where to serve content from
    watchContentBase: true, // dev-server watches for changes to served files
    index: 'index.html', // considered the the index file
    watchOptions: { // provides customizations for watch mode
  // this controls active watch mode for file changes w/in the directory containing the main source index.html file
    ignored: '/node_modules/',
      poll: true // creates a continous watch mode for devServer
      // anything imported into the src/js/index.js file is watched
    },
    compress: true, // compresses the HTTP requested files to .zip format
    port: 9000, // local hosting port assigned
    open: true, // auto open page
    overlay: { // creates dark overlay for high-contrast display
      warnings: true, // show any warnings
      errors: true // show any errors
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // location for output files
    filename: 'js/cbp-ds-bundle.js' // name of compiled js build file
  },
  // watch: true, // (watches changes in any of the resolved files)
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
              sassOptions: {
                // fiber: false,
                // using fiber support by default, allowing jumps between
                // call stacks from a single thread if needed.
              },
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

    // an HTML template is required to serve the bundle
    new HtmlWebpackPlugin({
      entry: '../ds-ux-guidelines/index.html',
      hash: false, // set to 'true' if needing unique ID's at end of file name
      title: 'Style Guide - CBP Style Guide',
      template: '../ds-ux-guidelines/index.html',
      inject: true,
      minify: {
          removeComments: false,
          collapseWhitespace: false
      }
  }),
    new MiniCssExtractPlugin({ // extracts CSS into separate files per JS file that contains CSS
      ignoreOrder: false, // enable to remove warnings about any possible conflict
      filename: 'css/cbp-ds.min.css'
    }),

    new OptimizeCssAssetsPlugin({ // optimizes/minifies all CSS assets
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { 
          
          discardComments: { 
          removeAll: true },

          cssDeclarationSorter: {
            order: 'alphabetically' // formats properties in alphabetical order
          },
          normalizeWhitespace: true

        }],
      },
      canPrint: true
    }),

    new StylelintPlugin({

  "options": {
    config: '.stylelintrc',
    files: '**/*.s?(a|c)ss',
    // files: './src/styles/custom/**/*.scss',
    // files: ['./src/styles/custom/**/*.scss', '../ds-ux-guidelines/sass/styles.scss'],
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
