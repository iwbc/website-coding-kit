'use strict';

const gulp   = require('gulp');
const extend = require('extend');
const url    = require('url');
const mock   = require('easymock').MockServer;
const proxy  = require('proxy-middleware');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * サーバーの起動
 */

gulp.task('server', () => {
	const proxy_pass    = url.parse(config.server.mock.proxy.pass);
	let proxy_options   = proxy_pass;
	proxy_options.route = config.server.mock.proxy.location;

	let bs_options      = extend({}, config.server.browsersync);
	bs_options.server   = bs_options.server || {
		baseDir    : config.dest,
		middleware : [proxy(proxy_options)]
	}
	if (bs_options.proxy) { delete bs_options.server }

	new mock({
		port : proxy_pass.port,
		path : config.server.mock.path
	}).start();

	return $.browser.init(bs_options);
});
