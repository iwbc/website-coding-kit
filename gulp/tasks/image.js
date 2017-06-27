'use strict';

const gulp   = require('gulp');
const png    = require('imagemin-pngquant');
const jpeg   = require('imagemin-jpeg-recompress');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * 画像の最適化
 */

gulp.task('image', () => {
  return gulp.src(config.path.image.src)
    .pipe($.changed(config.path.image.dest))
    .pipe($.if(
      config.image.enable,
      $.imagemin(
        [
          $.imagemin.gifsicle(),
          $.imagemin.svgo(),
          png(),
          jpeg(config.image.jpegrecompress)
        ],
        { verbose : true }
      )
    ))
    .pipe(gulp.dest(config.path.image.dest))
    .pipe($.browser.stream());
});
