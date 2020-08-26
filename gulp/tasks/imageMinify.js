const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

// Минификация и оптимизация изображений

module.exports = function imageMinify() {
  return gulp.src(
    ['src/images/**/*.{gif,png,jpg,svg,webp}',
    '!src/images/sprite/**/*']
  )
    .pipe(buffer())
    .pipe(imagemin([
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('dist/images/'))
};