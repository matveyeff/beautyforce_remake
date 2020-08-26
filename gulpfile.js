const gulp = require('gulp');
const styles = require('./gulp/tasks/styles');
const scripts = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const clean = require('./gulp/tasks/clean');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const spritePNG = require('./gulp/tasks/spritePNG');
const pug2html = require('./gulp/tasks/pug');
const serve = require('./gulp/tasks/serve');

const dev = gulp.parallel(pug2html, scripts, vendors, styles, fonts, imageMinify, spriteSVG, spritePNG);

exports.default = gulp.series(
	clean,
	dev,
	serve
);