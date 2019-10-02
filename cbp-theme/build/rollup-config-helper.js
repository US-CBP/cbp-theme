/* eslint-disable */
'use strict';

const path = require('path');

const process = require('process');
const json = require('rollup-plugin-json');
const jst = require('rollup-plugin-jst');
const progress = require('rollup-plugin-progress');
const replace = require('rollup-plugin-replace');
const sourcemaps = require('rollup-plugin-sourcemaps');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const filesize = require('rollup-plugin-filesize');
const alias = require ('rollup-plugin-alias');
const uglify = require ('rollup-plugin-uglify');


const projectRoot = path.join(__dirname);
const defaults = {
  root: projectRoot,
  src: path.join(projectRoot, "src"),
  dist: path.join(projectRoot, "dist")
};

const pkg = require(path.join(defaults.root, 'package.json'));

export function getESM5Config(options) {
  options.output = options.output || {};
  options.output.name = options.output.name || pkg.name;
  options.output = Object.assign({
    file: `${defaults.dist}/${options.output.name}.esm5.js`,
    format: 'es'
  }, options.output)
  return getRollupConfig(options);
}
export function getUMDConfig(options) {
  options.output = options.output || {};
  options.output.name = options.output.name || pkg.name;
  options.output = Object.assign({
    file: `${defaults.dist}/${options.output.name}.umd.js`,
    format: 'umd'
  }, options.output)
  options.ugligyUmd = process.env.production ? true : false;
  return getRollupConfig(options);
}

export function getRollupConfig(options) {

  options = options || {};
  options.input = options.input ||  path.join(defaults.src, `${options.name}.js`);
  options.namesExports = options.namesExports || {};
  options.aliases = options.aliases || {};
  options.name = options.name || pkg.name;
  options.ugligyUmd = options.ugligyUmd ? options.ugligyUmd : false

  const externals = _getDependencies(pkg, options);


  const config = {
    input: options.input,
    output: options.output,
    external: id => matchExternal(id, externals),
    plugins: [
      sourcemaps(),
      alias(options.aliases),
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
        namedExports: options.namedExports
      }),
      babel({
        babelrc: false,
        comments: true,
        sourceMap: true,
        moduleId: options.output.name,
        presets: [
          [
            "@babel/preset-env", {
            modules: false,
            loose: true,
          }],
          ],
          plugins: [
            "@babel/plugin-transform-object-assign",
          ],
          
        exclude: 'node_modules/**',
      })

    ]
  };

  if (options.ugligyUmd) {
    config.plugins.push(uglify(options.minify === true? {} : options.minify));
  }
  if (options.plugins) {
    Array.prototype.push.apply(config.plugins, options.plugins);
  }

  config.plugins.push(progress({clearLine: process.env.production ? false : true}))
  config.plugins.push(filesize())
  return config;
};


function _getDependencies(pkg, options) {
  let deps = [];
  options.excludeExternal = options.excludeExternal || []; //nulls
  const dependencies = pkg.dependencies ? Object.keys(pkg.dependencies) : [];
  const peerDependencies = pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [];
  const optionalDependencies = pkg.optionalDependencies ? Object.keys(pkg.optionalDependencies) : [];

  const allDependencies = [].concat(dependencies, peerDependencies, optionalDependencies);

  allDependencies.forEach((dep) => {
    if (!options.excludeExternal.includes(dep)) {
      deps.push(dep);
    }
  });

  console.log(options.output.name+':::Treating external dependencies :\n\t' , JSON.stringify(deps));
  return deps;
}

function matchExternal(id, externals) {
  externals = externals || [];
  // starts-with: if id starts with any of the external
  // e.g. lodash-es/isObject

  const match = externals.find(external => new RegExp(`^${external}/?.*?$`).test(id));
  return match ? true : false;

}