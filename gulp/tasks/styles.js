const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const groupMediaQueries = require('gulp-group-css-media-queries');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const px2rem = require('gulp-px-to-rem');

module.exports = function styles() {
  return gulp.src('src/styles/main.scss')
    .pipe(plumber())
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(sassGlob())
    .pipe(scss())
    .pipe(px2rem({accuracy:3, rootPX:16}))
    .pipe(autoprefixer({
			cascade: false,
			grid: true,
			overrideBrowserslist: ['last 5 versions']
    }))
    .pipe(groupMediaQueries())
    .pipe(gulpif(argv.prod, cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    })))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpif(!argv.prod, sourcemaps.write()))
    .pipe(gulp.dest('dist/css/'))
};