#!/usr/bin/env node
var sass = require('node-sass')
// var magicImporter = require('node-sass-magic-importer')
var path = require('path')
var fs = require('fs')
var cpx = require('cpx')
var postcss = require('postcss')
var postcssAssets = require('postcss-assets')
// var copyAssets = require('postcss-copy-assets')
var autoprefixer = require('autoprefixer')
var assetFunctions = require('node-sass-asset-functions');

var projectDir = path.join(__dirname, '..', '..')
var srcDir = path.join(projectDir, 'src')
var destDir = path.join(projectDir, 'dist')
var nodeModulesDir = path.join(projectDir, 'node_modules')

var entry = path.join(srcDir, 'styles/main.scss')

// sass.renderSync({
//   file: entry,
//   outputStyle: 'compressed',
//   outFile: 'cbp-theme.css',
//   sourceMap: true,
//   sourceMapContents: true,
//   // importer: [magicImporter()],
//   includePaths: [nodeModulesDir]
// });
//
sass.render({
  file: entry,
  outputStyle: 'compressed',
  outFile: 'cbp-theme.css',
  sourceMap: true,
  sourceMapContents: false,
  // importer: [magicImporter()],
  includePaths: [nodeModulesDir]
}, function (error, result) { // node-style callback from v3.0.0 onwards
  if (!error) {
    // No errors during the compilation, write this result on the disk
    postcss([
      autoprefixer({
        browsers: [
          '> 1%',
          'last 2 versions'
        ]
      })
    ]).process(result.css, {
      from: entry,
      to: path.join(destDir, 'cbp-theme-css-1.css'),
      // map: true
    }).then(function (postcssResults) {
      // console.log('here', postcssResults)
      fs.writeFileSync(path.join(destDir, 'cbp-theme.css'), postcssResults.css)
      fs.writeFileSync(path.join(destDir, 'cbp-theme.css.map'), postcssResults.map)
    })
    // fs.writeFileSync(path.join(destDir, 'cbp-theme.css'), result.css)
    // fs.writeFileSync(path.join(destDir, 'cbp-theme.css.map'), result.map)
    cpx.copySync(srcDir + '/styles/**/*.scss', destDir + '/scss')
    cpx.copySync(nodeModulesDir + '/font-awesome/fonts/*.*', destDir + '/font-awesome/fonts')
    cpx.copySync(nodeModulesDir + '/roboto-fontface/fonts/**/*', destDir + '/roboto-fontface/fonts')
  }
})
