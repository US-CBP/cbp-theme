const { series, src, watch, dest } = require("gulp");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const uswds = require("./node_modules/uswds-gulp/config/uswds");

const PROJECT_SASS_SRC = "styles/sass";
const CSS_DEST = "dist/";

/*
----------------------------------------
TASKS
----------------------------------------
*/

function buildJs() {
  return src("js/main.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest("dist"));
}

function buildSass() {
  const plugins = [
    autoprefixer({ cascade: false, grid: true }), // Autoprefix
    csso({ forceMediaMerge: false }) // Minify
  ];

  return src([`${PROJECT_SASS_SRC}/*.scss`], { sourcemaps: true, largeFile: true })
    .pipe(
      sass.sync({
        includePaths: [
          `${PROJECT_SASS_SRC}`,
          `${uswds}/scss`,
          `${uswds}/scss/packages`,
        ],
      })
    )
    .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
    .pipe(postcss(plugins))
    .pipe(dest(`${CSS_DEST}`, { sourcemaps: '.', largeFile: true }));
}

function defaultTasks() {
  watch("js/main.js", buildJs);
  watch(`${PROJECT_SASS_SRC}/**/*.scss`, buildSass);
}

module.exports = {
  build: series(buildJs, buildSass),
  buildJs,
  buildSass,
  default: defaultTasks,
}