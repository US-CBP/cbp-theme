const { parallel, src, watch, dest } = require("gulp");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass")(require("sass"));
const gls = require("gulp-live-server");
const uswds = require("./node_modules/uswds-gulp/config/uswds");

const PROJECT_SASS_SRC = "styles/sass";
const CSS_DEST = "dist/";

/*
----------------------------------------
TASKS
----------------------------------------
*/

function buildSass() {
  return src([`${PROJECT_SASS_SRC}/*.scss`], {
    sourcemaps: true,
    largeFile: true,
  })
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
    .pipe(postcss([
      autoprefixer({ cascade: false, grid: true }), // Autoprefix
      csso({ forceMediaMerge: false }), // Minify
    ]))
    .pipe(dest(`${CSS_DEST}`, { sourcemaps: ".", largeFile: true }));
}

function serve() {
  const server = gls.static('./', 8888);
  server.start();

  watch(['./**/*.html', './dist/*.css', './js/**/*.js'])
    .on('change', path => server.notify.call(server, { path }));
};

function defaultTasks() {
  watch(`${PROJECT_SASS_SRC}/**/*.scss`, buildSass);
}

module.exports = {
  build: buildSass,
  buildSass,
  default: parallel(defaultTasks, serve),
  serve: serve,
};
