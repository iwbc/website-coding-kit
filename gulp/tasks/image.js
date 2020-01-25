'use strict';

const path   = require('path');
const gulp   = require('gulp');
const png    = require('imagemin-pngquant');
const jpeg   = require('imagemin-jpeg-recompress');
const config = require('../config');
const $      = require('../load');

/**
 * 画像の最適化
 */

gulp.task('image', () => {
  const condition = (file) => {
    if (file.isDirectory()) {
      return false
    }
    if (Array.isArray(config.build.optimizeImages)) {
      return config.build.optimizeImages.includes(path.extname(file.basename))
    }
    return config.build.optimizeImages
  }

  return gulp.src(config.path.image.src, {
    since : (file) => {
      if (gulp.lastRun('image') <= file.stat.ctime) {
        return false;
      }
      return gulp.lastRun('image');
    }
  })
    .pipe($.if(
      condition,
      $.imagemin(
        [
          jpeg(config.image.jpegrecompress),
          png(),
          $.imagemin.gifsicle(),
          $.imagemin.svgo(config.image.svgo)
        ],
        { verbose : true }
      )
    ))
    .pipe(gulp.dest(config.path.image.dest))
    .pipe($.browser.stream());
});
