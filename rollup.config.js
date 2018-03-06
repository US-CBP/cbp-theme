import {getESM5Config, getUMDConfig} from './build/cbp-rollup-build/rollup-config-helper';
import path from 'path';

function getCommonOptions () {
  return {
    input: 'src/cbp-theme.js',
    name: 'cbp-theme',
    globals: {
      '$': 'jquery',
      'jQuery': 'jquery'
    }
  }
}

const esm5Config = getESM5Config(getCommonOptions())

const umdConfig = getUMDConfig(getCommonOptions())

const inputMaskUMDConfig = getUMDConfig(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'inputmask.js'),
  name: 'cbp-theme-inputmask',
  excludeExternal: ['jquery.inputmask']
}))

const inputMaskESM5Config = getESM5Config(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'inputmask.js'),
  name: 'cbp-theme-inputmask',
  excludeExternal: ['jquery.inputmask']
}))

export default [esm5Config, umdConfig, inputMaskUMDConfig, inputMaskESM5Config]
