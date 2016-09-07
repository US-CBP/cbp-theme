
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import middleware from 'connect-gzip-static';

var exec = require('child_process').exec;

const $ = gulpLoadPlugins({
  DEBUG: false,
  camelize: true, // if true, transforms hyphenated plugins names to camel case
  scope: [ 'devDependencies' ],
  lazy: true
});
const reload = browserSync.reload;

const app_images = [
  'app/images/**/*'
];

const app_js = [
  'node_modules/material-design-lite/src/*.js',
  'node_modules/material-design-lite/src/checkbox/*.js',
  'node_modules/material-design-lite/src/radio/*.js',
  'node_modules/material-design-lite/src/textfield/*.js',
  'node_modules/material-design-lite/src/data-table/*.js',
  'node_modules/material-design-lite/src/ripple/*.js',
  'node_modules/mdl-selectfield/src/selectfield/*.js',
  'app/js/**/*.js'
];

const dependencies_js = [
  'app/npm.js',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
  'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
];

const inputmaskJS = [
  'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
  'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.extensions.js',
  'node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask.*.extensions.js'
];

const FONTS_FILES = [
  'node_modules/font-awesome/fonts/*'
];

const options = {
  testLint : {
    env: {
      mocha: true
    }
  },
  resourceLint : {
    extends: 'eslint:recommended',
    rules : {
      "quotes": 0,
      'no-unused-expressions': 0,
      'space-infix-ops': 0,
      'no-underscore-dangle' : 0
    },
    globals: {
      '$': true,
      'jQuery': true,
      'define' : true
    }
  },
  sass : {
    outputStyle: 'expanded', // compressed, expanded
    precision: 10,
    includePaths: ['.']
  },
  autoprefixer : {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
  },
  gzip : {
    append: true,
    threshold: '1kb'
  }
}

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
};

gulp.task('lint', lint('app/js/**/*.js', options.resourceLint));
gulp.task('lint:test', lint('test/spec/**/*.js', options.testLint));

gulp.task('styles', () => {
  return gulp.src('app/styles/custom/scss/main.scss')
    .pipe($.plumber({ errorHandler : $.util.log }))
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync().on('error', $.sass.logError))
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe($.rename('cbp-theme.css'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(gulp.dest('dist/styles'))     // unminified into dist
    .pipe(gulp.dest('app/kitchensink/css'))
    .pipe($.cssnano({ zindex : false }))
    .pipe($.rename('cbp-theme.min.css'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/styles'))     // minified into dist
    .pipe(gulp.dest('app/kitchensink/css'))
    .pipe($.size({title: 'styles: before gzip', gzip: false}))
    .pipe($.gzip(options.gzip).on('error', $.util.log))
    .pipe($.size({title: 'styles: after gzip', gzip: true}))
    .pipe(gulp.dest('dist/styles'))     // minified & gzipped into dist
    .pipe(gulp.dest('app/kitchensink/css'))
    .pipe(reload({stream: true}));
});

gulp.task('app_bundle_scripts', () => {
  return gulp.src(app_js)
    .pipe($.concat('cbp-theme.js'))
    .pipe($.plumber({ errorHandler : $.util.log }))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe(gulp.dest('.tmp/js'))
    .pipe(gulp.dest('dist/js'))       // unminified into dist
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe($.rename('cbp-theme.min.js'))
    .pipe($.uglify().on('error', $.util.log))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))       // minified into dist
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe($.size({title: 'app scripts: before gzip', gzip: false}))
    .pipe($.gzip(options.gzip))
    .pipe($.size({title: 'app scripts: after gzip', gzip: true}))
    .pipe(gulp.dest('dist/js'))       // minified & gzipped into dist
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe(reload({stream: true}));
});

gulp.task('bundleJqueryInputmask', () => {
  return gulp.src(inputmaskJS)
    .pipe($.concat('inputmask.bundle.js'))
    .pipe(gulp.dest('dist/js'))        // minified into dist
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe($.concat('inputmask.bundle.min.js'))
    .pipe($.uglify().on('error', $.util.log))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))        // minified into dist
    // .pipe(gulp.dest('app/kitchensink/js'))
    .pipe($.size({title: 'app scripts: before gzip', gzip: false}))
    .pipe($.gzip(options.gzip))
    .pipe($.size({title: 'app scripts: after gzip', gzip: true}))
    .pipe(gulp.dest('dist/js'))       // minified & gzipped into dist
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', [ 'bundleJqueryInputmask' ], () => {
  return gulp.src(dependencies_js)
    .pipe($.plumber({ errorHandler : $.util.log }))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe($.size({title: 'dep scripts: before gzip', gzip: false}))
    .pipe($.gzip(options.gzip).on('error', $.util.log))
    .pipe($.size({title: 'dep scripts: after gzip', gzip: true}))
    .pipe(gulp.dest('dist/js'))
    .pipe(gulp.dest('app/kitchensink/js'))
    .pipe(reload({stream: true}));
});

gulp.task('html', [ 'styles', 'bundleJqueryInputmask', 'app_bundle_scripts', 'scripts'], () => {
  return gulp.src('app/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src(app_images)
    //.pipe($.cache($.imagemin({
    //  progressive: true,
    //  interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
    //  svgoPlugins: [{cleanupIDs: false}]
    //})))
    .pipe(gulp.dest('.tmp/images'))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
    return gulp.src(FONTS_FILES)
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'))
    .pipe(gulp.dest('app/kitchensink/fonts'))
    .pipe($.size({title: 'fonts: before gzip', gzip: false}))
    .pipe($.gzip(options.gzip).on('error', $.util.log))
    .pipe($.size({title: 'fonts: after gzip', gzip: true}))
    .pipe(gulp.dest('app/kitchensink/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('generateFonts', function(cb) {
    exec('webfont-dl -d \"https://fonts.googleapis.com/css?family=Roboto:300,300italic,400,400italic,500,500italic,700,700italic&subset=latin,greek,greek-ext,latin-ext,cyrillic-ext,cyrillic\" -o app/styles/vendor/roboto.css --font-out=dist/fonts --css-rel=../fonts --woff2=link --woff1=link --svg=link --ttf=link --eot=link' , function(err, stdout, stderr) {
      console.log(stdout);
    });
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, [
  '.tmp', 'dist', 'app/styles/vendor/*.{css, woff}', 'app/kitchensink/css/*.{css, gz}', 'app/kitchensink/js/*.{js, gz}'
  ]));

gulp.task('serve', [ 'lint', 'styles', 'bundleJqueryInputmask', 'app_bundle_scripts', 'scripts', 'fonts', 'images'], () => {
  browserSync({
    notify: false,
    port: 9000,
    browser: 'google chrome',
    server: {
      baseDir: ['.tmp', 'app/kitchensink'],
      index: 'index.html',
      routes: { '/node_modules': 'node_modules' }
    }
  }, function (err, bs) {
    bs.addMiddleware("*", middleware('./app/kitchensink'), {
        override: true
    });
});

  gulp.watch([
    'app/kitchensink/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*',
    '.tmp/js/*.js'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/js/**/*.js', ['app_bundle_scripts', 'scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      index: 'app/kitchensink/index.html'
    }
  }, function (err, bs) {
      bs.addMiddleware("*", middleware('./app/kitchensink'), {
          override: true
      });
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/js': '.tmp/js',
        '/node_modules': 'node_modules'
      }
    }
  });

  gulp.watch('app/js/**/*.js', ['app_bundle_scripts', 'scripts']);
  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// todo remove - inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/**/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
