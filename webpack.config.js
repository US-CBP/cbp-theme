"use strict";

let webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    postcssImport = require('postcss-import');

const defaultConfig = {
    cache: true,
    entry: {
        'cbp-theme': './index.js',
        'inputmask': './inputmask.js',
        'jquery': [ 'jquery' ],
        'cbp-theme.min': './index.js',
        'inputmask.min': './inputmask.js',
        'jquery.min': [ 'jquery' ]
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
            "mdl-selectfield": path.resolve('./node_modules/mdl-selectfield/dist/mdl-selectfield.js'),
        },
        extensions: [ '', '.json', '.js', '.min.js', '.bundle.js', '.css', '.min.css', '.scss', '.html' ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin('cbp-theme.css', {
          publicPath: "./",
          allChunks : false
        }),
        new webpack.optimize.UglifyJsPlugin({
          include: /\.min\.js$/,
          minimize: true
        })
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
        "jquery": "jQuery",
        "$": "jQuery"
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
        "jquery": "jQuery",
        "$": "jQuery"
    }
});

module.exports = [ standardDistConfig, kitchensinkConfig ];
