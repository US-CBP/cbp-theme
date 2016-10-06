"use strict";

let webpack = require('webpack'),
    WebpackStrip = require('strip-loader'),
    dev_config = require('./webpack.config.js');

dev_config.module.loaders.push({
  test:[/\.js$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log', 'console.info')
});

dev_config.plugins.push(
	new webpack.NoErrorsPlugin(),
  new webpack.optimize.DedupePlugin()
);

module.exports = dev_config;
