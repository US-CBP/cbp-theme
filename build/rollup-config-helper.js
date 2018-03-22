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


export function getRollupConfig(options) {

  options = options || {};
  options.name  = options.name  || pkg.name;
  options.input = options.input ||  path.join(defaults.src, `${options.name}.js`);
  options.output = options.output || {};
  options.output.file = options.output.file || `${defaults.dist}/${pkg.name}.default.js`;
  options.output.format = options.output.format || 'es';
  options.namesExports = options.namesExports || {};
  options.aliases = options.aliases || {};

  const externals = _getDependencies(pkg, options);


  const config = {
    name: pkg.name,
    input: options.input,
    debug: true,
    includes: options.includes || [],
    external: id => matchExternal(id, externals),
    sourcemap: true,
    output: {
      file: `${options.output.file}`,
      format: `${options.output.format}`,
      sourcemap: true,
    },
    globals: options.globals,
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
        namedExports: options.namesExports
      }),
      babel({
        babelrc: false,
        comments: true,
        sourceMap: true,
        moduleId: options.name,
        presets: [
          ["env", {
            modules: false,
            loose: true,
          }],
        ],
        exclude: 'node_modules/**',
      })

    ]
  };

  if (options.minify) {
    config.plugins.push(uglify(options.minify === true? {} : options.minify));
  }
  if (options.plugins) {
    Array.prototype.push.apply(config.plugins, options.plugins);
  }

  config.plugins.push(progress({clearLine: !options.debug}))
  config.plugins.push(filesize())
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




