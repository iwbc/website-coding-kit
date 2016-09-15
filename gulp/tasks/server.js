'use strict';

const gulp   = require('gulp');
const merge  = require('merge');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * サーバーの起動
 */

gulp.task('server', () => {
	const default_options = {
		server : {
			baseDir : config.dest
		}
	};
	let options = merge.recursive(true, default_options, config.server);
	if (options.proxy) { delete options.server; }
	return $.browser.init(options);
});