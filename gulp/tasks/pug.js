const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');

module.exports = function pug2html() {
  return gulp.src('src/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(plumber.stop())
    .pipe(htmlValidator())
    .pipe(gulp.dest('dist'))
};