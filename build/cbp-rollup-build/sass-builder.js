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
// var assetFunctions = require('node-sass-asset-functions')
const url = require('postcss-url')

var projectDir = path.join(__dirname, '..', '..')
var srcDir = path.join(projectDir, 'src')
var destDir = path.join(projectDir, 'dist')
var nodeModulesDir = path.join(projectDir, 'node_modules')

var entry = path.join(srcDir, 'styles/main.scss')
var dest = path.join(destDir, 'cbp-theme.css')

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
const postcssAssetOptions = [
  { url: 'copy', basePath: nodeModulesDir, assetsPath: destDir, useHash: false },
  // { filter: '**/assets/inline/*.svg', url: 'inline' },
  // { filter: '**/assets/**/*.gif', url: 'rebase' },
  // // using custom function to build url
  // { filter: 'cdn/**/*', url: (asset) => `https://cdn.url/${asset.url}` }
];

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
    fs.writeFileSync(dest, result.css)
    postcss([
      autoprefixer({
        browsers: [
          '> 1%',
          'last 2 versions'
        ]
      }),
      url(postcssAssetOptions)
      // url({
      //   // url: function (asset, dir, options, decl, warn, result) {
      //   //   if (asset.url.match(/roboto/)) {
      //   //     const url = 'yogesh/' + asset.url
      //   //     decl.value = url
      //   //     return decl.value
      //   //   }
      //   //   console.log(asset)
      //   // },
      //   url: 'copy',
      //   basePath: projectDir,
      //   assetsPath: destDir,
      //   useHash: true
      // })
    ]).process(result.css, {
      from: entry,
      to: path.join(destDir, 'cbp-theme-css.min.css')
      // map: true
    }).then(function (postcssResults) {
      // console.log('here', postcssResults)
      fs.writeFileSync(path.join(destDir, 'cbp-theme.min.css'), postcssResults.css)
      fs.writeFileSync(path.join(destDir, 'cbp-theme.min.css.map'), postcssResults.map)
    })
    // fs.writeFileSync(path.join(destDir, 'cbp-theme.css'), result.css)
    // fs.writeFileSync(path.join(destDir, 'cbp-theme.css.map'), result.map)
    // cpx.copySync(srcDir + '/styles/**/*.scss', destDir + '/scss')
    // cpx.copySync(nodeModulesDir + '/font-awesome/fonts/*.*', destDir + '/font-awesome/fonts')
    // cpx.copySync(nodeModulesDir + '/roboto-fontface/fonts/**/*', destDir + '/roboto-fontface/fonts')
  }
})
