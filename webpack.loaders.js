"use strict";

let ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');

module.exports = [{
    test: /\.json$/,
    loaders: ['json']
}, {
    test: /\.(js)$/,
    loader: 'babel',
    exclude: [/node_modules/],
    query: { compact: false } 
}, {
    test: /\.html$/,
    exclude: [/node_modules/, /index\.html/ ],
    loader: 'raw'
}, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css'),
    include: [ /app/, /node_modules/ ]
}, {
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
}, {
    test: /\.ico(\?.*)?$/,
    exclude: /node_modules/,
    loader: 'file?name=[name].[ext]'
}, {
    test: /\.(jpe?g|png|gif)$/i,
    loader: 'file?hash=sha512&digest=hex&name=[name].[ext]'
}, /*{
    test: /\.svg(\?.*)?$/,
    loader: 'url-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml'
},*/ {
    test: /\.svg(\?.*)?$/,
    loader: 'file?name=[name].[ext]'
}, {
    test: /\.woff(\?.*)?$/,
    loader: 'url-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff'
}, {
    test: /\.woff2(\?.*)?$/,
    loader: 'url-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff2'
}, {
    test: /\.ttf(\?.*)?$/,
    loader: 'url-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream'
}, {
    test: /\.eot(\?.*)?$/,
    loader: 'url-loader?name=[name].[ext]&limit=10000&mimetype=application/vnd.ms-fontobject'
}];
