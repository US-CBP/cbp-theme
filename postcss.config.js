var path = require('path')

var projectDir = path.join(__dirname)
var destDir = path.join(projectDir, 'dist')
var nodeModulesDir = path.join(projectDir, 'node_modules')

module.exports = ctx => ({
  map: {inline: false},
  // from: path.join(destDir, 'cbp-theme.css'),
  // to: path.join(destDir, 'cbp-theme.min.css'),
  plugins: {
    'autoprefixer': { browsers: ['> 1%', 'last 2 versions'] },
    'postcss-url': {
      url: 'copy',
      basePath: [nodeModulesDir],
      assetsPath: destDir,
      useHash: true,
      hashOptions: {append: true}
    }
  }
})
