'use strict';

const gulp   = require('gulp');
const merge  = require('merge');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * サーバーの起動
 */

gulp.task('server', () => {
	const browsersync_def_options = {
		server : {
			baseDir : config.dest
		}
	};
	let browsersync_options = merge.recursive(true, browsersync_def_options, config.server.browsersync);
	if (browsersync_options.proxy) { delete browsersync_options.server; }
	return $.browser.init(browsersync_options);
});