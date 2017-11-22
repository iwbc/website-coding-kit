'use strict';

const gulp   = require('gulp');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * ファイル更新の監視
 */

gulp.task('watch', () => {
  config.path.copy.forEach((copy) => {
    $.watch(copy.src, () => {
      gulp.start('copy');
    });
  });
  $.watch(config.path.ejs.watch, () => {
    gulp.start('ejs');
  });
  $.watch(config.path.style.watch, () => {
    gulp.start('style');
  });
  $.watch(config.path.image.watch, () => {
    gulp.start('image');
  });
  $.watch(config.path.sprite.png.watch, () => {
    gulp.start('sprite:png');
  });
  $.watch(config.path.sprite.svg.watch, () => {
    gulp.start('sprite:svg');
  });
});
