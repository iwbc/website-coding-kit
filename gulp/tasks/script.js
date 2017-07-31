'use strict';

const gulp              = require('gulp');
const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config            = require('../../webpack.config.js');
const $                 = require('../load.js');

let is_watching = false;

/**
 * JSのモジュール依存解決、ES5へのトランスパイル
 */

gulp.task('script', (callback) => {
  webpack(config, (err, stats) => {
    console.log(stats.toString({
      chunks  : false,
      modules : false,
      colors  : true
    }));
    $.browser.reload();
    if (!is_watching) {
      is_watching = true;
      callback();
    }
  });
});

gulp.task('script:watch', () => {
  config.watch = true;
  gulp.start('script');
});
