'use strict';

const gulp   = require('gulp');
const del    = require('del');
const config = require('../config.js');

/**
 * 指定ディレクトリ以下を削除する
 */

gulp.task('clean', del.bind(null,
  [
    `${config.dest}/*`,
    `!${config.dest}/.git`,
    config.path.sprite.png.dest.style,
    config.path.sprite.png.dest.image,
    config.path.sprite.svg.dest
  ],
  { dot: true }
));
