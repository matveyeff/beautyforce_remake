const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const spritesmith = require('gulp.spritesmith');

module.exports = function spritePNG() {
  // Генерируем спрайт
  const spriteData = gulp.src('src/images/sprite/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../dist/images/sprite/sprite.png',
    cssName: 'sprite.scss',
    padding: 5,
    cssVarMap: function (sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  }));

  // Оптимизируем спрайт
  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/sprite/'));

  // Собираем SCSS
  const cssStream = spriteData.css
    .pipe(gulp.dest('src/styles/utils/'));

  return merge(imgStream, cssStream);
};