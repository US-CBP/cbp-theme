/* eslint-disable */
'use strict';

const path = require('path');


const json = require('rollup-plugin-json');
const jst = require('rollup-plugin-jst');
const progress = require('rollup-plugin-progress');
const replace = require('rollup-plugin-replace');
const sourcemaps = require('rollup-plugin-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const cleanup = require('rollup-plugin-cleanup');
const filesize = require('rollup-plugin-filesize');
const alias = require ('rollup-plugin-alias');
const sass = require('rollup-plugin-sass');

const projectRoot = path.join(__dirname);
const defaults = {
  root: projectRoot,
  src: path.join(projectRoot, "src"),
  dist: path.join(projectRoot, "dist")
};

const pkg = require(path.join(defaults.root, 'package.json'));


export function getRollupConfig(options) {

  options = options || {};
  options.name  = options.name  || pkg.name;
  options.input = options.input ||  path.join(defaults.src, `${options.name}.js`);
  options.output = options.output || {};
  options.output.file = options.output.file || `${defaults.dist}/${pkg.name}.default.js`;
  options.output.format = options.output.format || 'es';
  options.namesExports = options.namesExports || {};

  const externals = _getDependencies(pkg, options);


  const config = {
    name: pkg.name,
    input: options.input,
    debug: true,
    external: id => matchExternal(id, externals),
    output: {
      file: `${options.output.file}`,
      format: `${options.output.format}`,
      sourcemap: true,
    },
    globals: options.globals,
    plugins: [
      alias({
        '$': 'jquery',
        "inputmask.dependencyLib": path.join(projectRoot,'node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib.jquery.js'),
        "inputmask": path.join(projectRoot,'/node_modules/jquery.inputmask/dist/inputmask/inputmask.js'),
        "jquery.inputmask": path.join(projectRoot,'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js'),
        "inputmaskDir": path.join(projectRoot,'node_modules/jquery.inputmask/dist/inputmask'),
      }),
      sourcemaps(),
      json({
        exclude: ['node_modules/**']
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      }),
      jst({
        include: 'src/templates/**'
      }),
      nodeResolve({
        jsnext: true,
        module: true,
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      commonjs({
        namedExports: options.namesExports
      }),
      babel({
        babelrc: false,
        comments: true,
        moduleId: options.name,
        presets: [
          ["es2015", {
            modules: false,
            loose: true,
          }],
        ],
        exclude: 'node_modules/**',
      }),
      // cleanup({comments: ['all']}),
      progress({clearLine: !options.debug}),
      filesize()
    ]
  };

  if (options.sassConfig) {
    config.plugins.push(sass(options.sassConfig))
  }
  return config;
};
export const getESM5Config = function (options) {
  options.output = options.output || {};
  options.output.file = options.output.file || `${defaults.dist}/${options.name}.esm5.js`;
  options.output.format = 'es';
  const config = getRollupConfig(options);

  return config;
};
export const getUMDConfig = function (options) {
  options.output = options.output || {};
  options.output.file = options.output.file || `${defaults.dist}/${options.name}.umd.js`;
  options.output.format = 'umd';
  const config = getRollupConfig(options);

  return config;
};
function _getDependencies(pkg, options) {
  let deps = [];
  options.includeExternal = options.includeExternal || []; //nulls
  const dependencies = pkg.dependencies ? Object.keys(pkg.dependencies) : [];
  const peerDependencies = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [];
  const optionalDependencies = pkg.optionalDependencies ? Object.keys(pkg.optionalDependencies) : [];
  const devDependencies = pkg.devDependencies ? Object.keys(pkg.devDependencies) : [];

  const allDependencies = [].concat(dependencies, peerDependencies, optionalDependencies, devDependencies);

  allDependencies.forEach((dep) => {
    if (!options.includeExternal.includes(dep)) {
      deps.push(dep);
    }
  });

  console.log(options.output.file+':::Treating external dependencies :\n\t' , JSON.stringify(deps));
  return deps;
}

function matchExternal(id, externals) {
  externals = externals || [];
  // starts-with: if id starts with any of the external
  // e.g. lodash-es/isObject
  const match = externals.find(external => new RegExp(`^${external}/?.*?$`).test(id));
  return match ? true : false;

}




