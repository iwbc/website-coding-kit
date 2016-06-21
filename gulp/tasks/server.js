'use strict';

const config      = require('../../gulpconfig.js');
const browserSync = require('../browser-sync.js');
const gulp        = require('gulp');

/**
 * ローカルサーバーの起動
 */

gulp.task('server', function() {
	browserSync.init(config.server);
});