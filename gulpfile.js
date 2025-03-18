const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const include = require('gulp-include');


function pages() {
  return src('app/pages/*.html')
    .pipe(include({
      includePaths: 'app/components'
    }))
    .pipe(dest('app'))
    .pipe(browserSync.stream())
}

function fonts() {
  return src('app/fonts/src/*.*')
    .pipe(fonter({
      formats: ['woff', 'ttf']
    }))
    .pipe(src('app/fonts/*.ttf'))
    .pipe(ttf2woff2())
    .pipe(dest('app/fonts'))
}

function images() {
  return src(['app/images/src/**/*.*', '!app/images/src/**/*.svg'])
    .pipe(src('app/images/src/**/*.*'))
    .pipe(src('app/images/src/*.*'))
    .pipe(newer('app/images'))
    .pipe(webp())

    .pipe(src('app/images/src/**/*.*'))
    .pipe(src('app/images/src/*.*'))
    .pipe(newer('app/images'))
    .pipe(imagemin())

    .pipe(dest('app/images'))
}

function scripts() {
  return src([
    'app/js/main.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
    .pipe(concat('style.css'))
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    }
  });
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/images/src'], images);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/components/*', 'app/pages/*'], pages);
  watch(['app/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
  return del('dist')
}

function building() {
  return src([
    'app/*.html',
    '!app/pages/*.html',

    'app/css/style.css',
    'app/css/icomoon-style.css',

    'app/*.js',
    'app/*.json',

    'app/js/*.js',
    '!app/js/main.min.js',

    'app/images/**/*.*',
    'app/images/*.*',
    '!app/images/src/**/*.*',
    '!app/images/src/*.*',
    
    'app/videos/*.*',
    
    'app/fonts/*.*',
    'app/fonts/icomoon/*.*',

    'app/libs/**/*.*',
    'app/libs/*.*',
  ], { base: 'app' })
    .pipe(dest('dist'))
}

exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.pages = pages;
exports.building = building;
exports.scripts = scripts;
exports.watching = watching;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, images, scripts, pages, watching);