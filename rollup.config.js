import {getESM5Config, getUMDConfig} from './build/rollup-config-helper'

import path from 'path'

const projectRoot = path.join(__dirname)

function getCommonOptions (input, name, excludeExternal) {
  return {
    input: input,
    output: {
      globals: {
        '$': 'jquery',
        'jQuery': 'jquery',
        'jquery': '$'
      },
      sourcemap: true,
      name: name
    },
    excludeExternal: excludeExternal,
    aliases: {
      '$': 'jquery',
      './dependencyLibs/inputmask.dependencyLib': path.join(projectRoot, 'node_modules/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.jquery.js'),
      'bootstrap': path.join(projectRoot, 'node_modules/bootstrap/dist/js/bootstrap.js')
    }
  }
}

const cbpThemeESM5 = getESM5Config(getCommonOptions('src/cbp-theme.js', 'cbp-theme'))
const cbpThemeUMD = getUMDConfig(getCommonOptions('src/cbp-theme.js', 'cbp-theme'))

const inputmaskUMD = getUMDConfig(getCommonOptions('src/cbp-inputmask.js', 'cbp-theme-inputmask'))
inputmaskUMD.external = ['jquery', 'jQuery']

const allInclusiveBrowserUMD = getUMDConfig(getCommonOptions('src/cbp-theme.browser.bundle.js', 'cbp-theme.browser.bundle', ['bootstrap', 'material-design-lite', 'mdl-selectfield']))

export default [allInclusiveBrowserUMD, inputmaskUMD, cbpThemeUMD, cbpThemeESM5]
