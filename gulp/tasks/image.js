'use strict';

const gulp   = require('gulp');
const png    = require('imagemin-pngquant');
const jpeg   = require('imagemin-jpeg-recompress');
const config = require('../config');
const $      = require('../load');

/**
 * 画像の最適化
 */

gulp.task('image', () => {
  return gulp.src(config.path.image.src, {
    since : (file) => {
      if (gulp.lastRun('image') <= file.stat.ctime) {
        return false;
      }
      return gulp.lastRun('image');
    }
  })
    .pipe($.if(
      config.build.optimizeImages,
      $.imagemin(
        [
          $.imagemin.gifsicle(),
          $.imagemin.svgo(config.image.svgo),
          png(),
          jpeg(config.image.jpegrecompress)
        ],
        { verbose : true }
      )
    ))
    .pipe(gulp.dest(config.path.image.dest))
    .pipe($.browser.stream());
});
