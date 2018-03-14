import {getESM5Config, getUMDConfig} from './build/cbp-rollup-build/rollup-config-helper';
import path from 'path';

function getCommonOptions() {
  return {
    input: 'src/cbp-theme.js',
    name: 'cbp-theme',
    globals: {
      '$': 'jquery',
      'jQuery': 'jquery',
      'jquery': '$'
    }
  }
}

const esm5Config = getESM5Config(getCommonOptions())

const umdConfig = getUMDConfig(getCommonOptions())


const inputMaskESM5Config = getESM5Config(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'inputmask.js'),
  name: 'cbp-theme-inputmask'
}))

const inputMaskUMDConfig = getUMDConfig(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'inputmask.js'),
  name: 'cbp-theme-inputmask',
  globals: ['$','jQuery', 'jquery']
}))
inputMaskUMDConfig.external = ['jquery', '$', 'jQuery'];

const allInclusive = getUMDConfig(Object.assign(getCommonOptions(), {
  input: path.join(__dirname, 'src', 'cbp-theme-all-inclusive.js'),
  name: 'cbp-theme-all-inclusive',
  includeExternal: ['bootstrap', 'material-design-lite', 'mdl-selectfield/dist/mdl-selectfield'],

}))


export default [esm5Config, umdConfig, inputMaskUMDConfig, inputMaskESM5Config, allInclusive]
