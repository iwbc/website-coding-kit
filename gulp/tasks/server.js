'use strict';

const gulp    = require('gulp');
const extend  = require('extend');
const config  = require('../config');
const $       = require('../load');

/**
 * サーバーの起動
 */

gulp.task('server', (callback) => {

  let bs_options = extend(true, {
    server: {
      baseDir : config.dest,
      index   : 'index.html',
      routes  : {}
    }
  }, config.server.browsersync);

  bs_options.server.routes[`/${config.path.style.dest.sassdoc}`] = config.path.style.dest.sassdoc;
  if (bs_options.proxy) { delete bs_options.server }
  $.browser.init(bs_options);
  callback();

});
