#!/usr/bin/env node
var sass = require('node-sass');
var magicImporter = require('node-sass-magic-importer');
var path = require('path');
var fs = require('fs');
var glob = require('glob');

var projectDir = path.join(__dirname, '..', '..');
var srcDir = path.join(projectDir, 'src');
var destDir = path.join(projectDir, 'dist');
var nodeModulesDir = path.join(projectDir, 'node_modules');

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
    _relativeCopy('**/*.scss', srcDir, destDir);
    // _relativeCopy('font-awesome/fonts/*.*', nodeModulesDir, destDir);
    // _relativeCopy('roboto-fontface/fonts/**/*.*', nodeModulesDir, destDir);
  }
})

// Copy files maintaining relative paths.
function _relativeCopy(fileGlob, from, to) {
  console.log('copying ' + fileGlob + ' from ' + from + ' to ' + to);
  glob(fileGlob, {cwd: from, nodir: true}, (err, files) => {
    files.forEach(file => {
      const origin = path.join(from, file);
      const dest = path.join(to, file);
      const data = fs.readFileSync(origin, 'utf-8');
      _recursiveMkDir(path.dirname(dest));
      fs.writeFileSync(dest, data);
    })
  })
}

// Recursively create a dir.
function _recursiveMkDir(dir) {
  if (!fs.existsSync(dir)) {
    _recursiveMkDir(path.dirname(dir));
    fs.mkdirSync(dir);
  }
}
