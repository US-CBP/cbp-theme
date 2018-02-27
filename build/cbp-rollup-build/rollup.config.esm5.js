import path from 'path';
import {cfESM5Config, cfUMDConfig} from './cf-esm5-rollup-config';
let debug = process.env.debug || false;
import common from '../../rollup.config';


const esm5Config = cfESM5Config({
    name: common.name,
    globals: common.globals
});

const umdConfig = cfUMDConfig({
  name: common.name,
  globals: common.globals
});

const inutMaskUMDConfig = cfUMDConfig({
  input: path.join(__dirname, '..', '..' , 'src', 'inputmask.js'),
  name: 'inputmask',
  globals: common.globals,
  excludeExternal: ['jquery.inputmask']
});
export default [esm5Config, umdConfig, inutMaskUMDConfig];
