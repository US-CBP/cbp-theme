#!/usr/bin/env node
var sass = require('node-sass')
var magicImporter = require('node-sass-magic-importer')
var path = require('path')
var fs = require('fs')
var cpx = require('cpx')

var projectDir = path.join(__dirname, '..', '..')
var srcDir = path.join(projectDir, 'src')
var destDir = path.join(projectDir, 'dist')
var nodeModulesDir = path.join(projectDir, 'node_modules')

sass.render({
  file: path.join(srcDir, 'styles/main.scss'),
  outputStyle: 'compressed',
  outFile: 'cbp-theme.css',
  sourceMap: true,
  importer: [magicImporter()],
  includePaths: [nodeModulesDir]
}, function (error, result) { // node-style callback from v3.0.0 onwards
  if (!error) {
    // No errors during the compilation, write this result on the disk
    fs.writeFileSync(path.join(destDir, 'cbp-theme.css'), result.css)
    fs.writeFileSync(path.join(destDir, 'cbp-theme.css.map'), result.map)
    cpx.copySync(srcDir + '/styles/**/*.scss', destDir + '/scss')
    cpx.copySync(nodeModulesDir + '/font-awesome/fonts/*.*', destDir + '/font-awesome/fonts')
    cpx.copySync(nodeModulesDir + '/roboto-fontface/fonts/**/*', destDir + '/roboto-fontface/fonts')
  }
})
