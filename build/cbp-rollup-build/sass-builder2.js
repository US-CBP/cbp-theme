#!/usr/bin/env node
var sass = require('node-sass')
var magicImporter = require('node-sass-magic-importer')
var path = require('path')
var fs = require('fs')
var cpx = require('cpx')
var postcss = require('postcss')
var cssnano = require('cssnano')
var postcssAssets = require('postcss-assets')
// var copyAssets = require('postcss-copy-assets')
var autoprefixer = require('autoprefixer')

var projectDir = path.join(__dirname, '..', '..')
var srcDir = path.join(projectDir, 'src')
var destDir = path.join(projectDir, 'dist')
var nodeModulesDir = path.join(projectDir, 'node_modules')

var entry = path.join(srcDir, 'styles/main.scss')

sass.render({
  file: entry,
  indentWidth: 4,
  omitSourceMapUrl: true,
  outputStyle: 'expanded',
  outFile: 'cbp-theme.css',
  sourceMap: true,
  sourceMapContents: true,
  importer: [magicImporter()],
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
      }),
      cssnano()
      // postcssAssets({
      //   basePath: '../src/',
      //   cachebuster: true
      // })
    ]).process(result.css, {
      from: entry,
      sourcesContent: true,
      to: path.join(destDir, 'cbp-theme-css-1.css'),
      map: { prev: JSON.parse(result.map), inline: false, annotation: false, sourcesContent: true }
    }).then(function (postcssResults) {
      // console.log('here', postcssResults)
      fs.writeFileSync(path.join(destDir, 'cbp-theme.css'), postcssResults.css)
      fs.writeFileSync(path.join(destDir, 'cbp-theme.css.map'), postcssResults.map)
    }).catch(function (error) {
      console.error(error)
    })
    // fs.writeFileSync(path.join(destDir, 'cbp-theme.css'), result.css)
    // fs.writeFileSync(path.join(destDir, 'cbp-theme.css.map'), result.map)
    // cpx.copySync(srcDir + '/styles/**/*.scss', destDir + '/scss')
    // cpx.copySync(nodeModulesDir + '/font-awesome/fonts/*.*', destDir + '/font-awesome/fonts')
    // cpx.copySync(nodeModulesDir + '/roboto-fontface/fonts/**/*', destDir + '/roboto-fontface/fonts')
  }
})
