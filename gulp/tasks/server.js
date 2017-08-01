'use strict';

const gulp    = require('gulp');
const extend  = require('extend');
const history = require('connect-history-api-fallback');
const config  = require('../config.js');
const $       = require('../load.js');

/**
 * サーバーの起動
 */

gulp.task('server', () => {

  let bs_options = extend(true, {
    server: {
      baseDir    : config.dest,
      index      : 'index.html',
      routes     : {},
      middleware : [history()]
    }
  }, config.server.browsersync);

  bs_options.server.routes[`/${config.path.style.dest.sassdoc}`] = config.path.style.dest.sassdoc;
  if (bs_options.proxy) { delete bs_options.server }
  return $.browser.init(bs_options);

});
