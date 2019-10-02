#!/usr/bin/env node
var argv = require('yargs').argv
var sass = require('node-sass')
var path = require('path')
var fs = require('fs')
var cpx = require('cpx')
var postcss = require('postcss')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var postcssUrl = require('postcss-url')

var projectDir = path.join(__dirname, '..')
var srcDir = path.join(projectDir, 'src')
var destDir = path.join(projectDir, 'dist')
var nodeModulesDir = path.join(projectDir, 'node_modules')

var entry = path.join(srcDir, 'styles/main-no-fonts.scss')

const postcssAssetOptions = [
  {url: 'copy', basePath: nodeModulesDir, assetsPath: destDir, useHash: false}
]

function sassToCss () {
  sass.render({
    file: entry,
    outputStyle: 'expanded',
    outFile: 'cbp-theme-no-fonts.css',
    sourceMap: true,
    sourceMapContents: true,
    omitSourceMapUrl: false,
    includePaths: [nodeModulesDir]
  }, function (error, result) {
    if (!error) {
      runPostCSS(result)
    } else {
      console.error(error)
    }
  })
}

function runPostCSS (result) {
  const postcssBuilder = postcss()

  postcssBuilder.use(
    autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions'
      ]
    }))

  if (argv.production) {
    postcssBuilder.use(cssnano({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    }))
  }
  postcssBuilder.use(postcssUrl(postcssAssetOptions))

  postcssBuilder.process(result.css, {
    from: entry,
    to: path.join(destDir, 'cbp-theme-no-fonts.min.css'),
    map: {prev: JSON.parse(result.map), inline: false, sourcesContent: true}
  }).then(function (postcssResults) {
    fs.writeFileSync(path.join(destDir, 'cbp-theme-no-fonts.min.css'), postcssResults.css)
    fs.writeFileSync(path.join(destDir, 'cbp-theme-no-fonts.min.css.map'), postcssResults.map)
  })
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir)
  }

  fs.writeFileSync(path.join(destDir, 'cbp-theme-no-fonts.css'), result.css)
  cpx.copySync(srcDir + '/styles/**/*.scss', destDir + '/scss')
}

sassToCss()

if (argv.w || argv.watch) {
  var chokidar = require('chokidar')
  chokidar.watch(srcDir, {ignored: /^(.*?)\.(?!(scss|sass)$).*$/}).on('change', path => {
    console.log(`File ${path} has been changed`)
    sassToCss()
  })
}
