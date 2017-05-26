'use strict';

const gulp   = require('gulp');
const extend = require('extend');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * サーバーの起動
 */

gulp.task('server', () => {

	let bs_options = extend({}, config.server.browsersync);

	bs_options.server = bs_options.server || { baseDir : config.dest }

	// serverが未定義の場合はdestとsassdocsディレクトリをサーブする
	if (bs_options.server) {
		bs_options.server.baseDir = config.dest;
		bs_options.server.routes = {};
		bs_options.server.routes[`/${config.path.style.dest.sassdoc}`] = config.path.style.dest.sassdoc;
	}

	if (bs_options.proxy) { delete bs_options.server }
	return $.browser.init(bs_options);

});
