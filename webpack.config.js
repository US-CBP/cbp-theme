"use strict";

let webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    postcssImport = require('postcss-import'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

const defaultConfig = {
    cache: true,
    entry: {
        'cbp-theme': './cbp-theme.js',
        'inputmask': './inputmask.js',

        'cbp-theme.min': './cbp-theme.js',
        'inputmask.min': './inputmask.js',
    },
    eslint: {
        configFile: '.eslintrc'
    },
    stats: {
        colors: true,
        reasons: true
    },
    devServer: {
        contentBase : path.resolve('./app/kitchensink')
    },
    module: {
        loaders: require('./webpack.loaders')
    },
    postcss: function (webpack) {
         return [
            postcssImport({
                addDependencyTo: webpack
            })
        ];
    },
    resolve: {
        root: [
            path.resolve('./app/'),
            path.resolve('./node_modules/')
        ],
        alias : {
            "inputmask.dependencyLib": path.resolve('./node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib.jquery.js'),
            "inputmask": path.resolve('./node_modules/jquery.inputmask/dist/inputmask/inputmask.js'),
            "jquery.inputmask": path.resolve('./node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js'),
            "inputmaskDir": path.resolve('./node_modules/jquery.inputmask/dist/inputmask'),
            "mdl-selectfield-module": path.resolve('./node_modules/mdl-selectfield/dist/mdl-selectfield.js')
        },
        extensions: [ '', '.json', '.js', '.min.js', '.bundle.js', '.css', '.min.css', '.scss', '.html' ]
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, './node_modules')]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('cbp-theme.css', {
          publicPath: "./",
          allChunks : false
        }),
        new webpack.optimize.UglifyJsPlugin({
          include: /\.min\.js$/,
          minimize: true,
          comments: false
        }),
        new CopyWebpackPlugin([
            { from: 'app/styles', to: 'scss' }
        ])
    ]
};


const kitchensinkConfig = Object.assign({}, defaultConfig, {
    devtool: "#eval",
    debug: true,
    output: {
        libraryTarget: 'umd',
        path: path.resolve('./app/kitchensink/dist'),
        filename: '[name].js',
        chunkFilename: "[hash]/js/[id].js"
    },
    externals: {
        'jquery': {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    }
});

const standardDistConfig = Object.assign({}, defaultConfig, {
    output: {
        libraryTarget: 'umd',
        path: path.resolve('./dist'),
        filename: '[name].js',
        chunkFilename: "[hash]/js/[id].js"
    },
    externals: {
        'jquery': {
            root: 'jQuery',
            commonjs2: 'jquery',
            commonjs: 'jquery',
            amd: 'jquery'
        }
    }
});

module.exports = [ standardDistConfig, kitchensinkConfig ];
