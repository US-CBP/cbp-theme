import {getESM5Config, getUMDConfig} from './build/rollup-config-helper'


import path from 'path'

const projectRoot = path.join(__dirname)
function getCommonOptions () {
  return {
    input: 'src/cbp-theme.js',
    name: 'cbp-theme',
    globals: {
      '$': 'jquery',
      'jQuery': 'jquery',
      'jquery': '$'
    },
    aliases: {
      '$': 'jquery',
      'inputmask.dependencyLib': path.join(projectRoot, 'node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib.jquery.js'),
      'inputmask': path.join(projectRoot, '/node_modules/jquery.inputmask/dist/inputmask/inputmask.js'),
      'jquery.inputmask': path.join(projectRoot, 'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js'),
      'inputmaskDir': path.join(projectRoot, 'node_modules/jquery.inputmask/dist/inputmask'),
      'bootstrap': path.join(projectRoot, 'node_modules/bootstrap/dist/js/bootstrap.js')
    }
  }
}

const cbpThemeESM5Config = getESM5Config(getCommonOptions())
cbpThemeESM5Config.sassOptions = {}

const cbpThemeUMDConfig = getUMDConfig(getCommonOptions(), {
  minify: true
})

const inputMaskUMDConfig = getUMDConfig(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'cbp-inputmask.js'),
  name: 'cbp-theme-inputmask',
  globals: ['$', 'jQuery', 'jquery'],
  minify: true
}))
inputMaskUMDConfig.external = ['jquery', 'jQuery']

const allInclusive = getUMDConfig(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'cbp-theme.browser.bundle.js'),
  name: 'cbp-theme.browser.bundle',
  excludeExternal: ['bootstrap', 'material-design-lite', 'mdl-selectfield'],
  minify: true,
}))

export default [cbpThemeESM5Config, cbpThemeUMDConfig, inputMaskUMDConfig, allInclusive]
