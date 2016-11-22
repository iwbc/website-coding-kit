'use strict';

const gulp   = require('gulp');
const extend = require('extend');
const url    = require('url');
const proxy  = require('proxy-middleware');
const StubCell = require('stubcell');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * サーバーの起動
 */

gulp.task('server', () => {

	let bs_options    = extend({}, config.server.browsersync);
	bs_options.server = bs_options.server || { baseDir : config.dest }

	if (config.server.mock.enable && !bs_options.proxy) {
		// proxy
		let proxy_options   = url.parse(config.server.mock.proxy.pass);
		proxy_options.route = config.server.mock.proxy.location;
		bs_options.server.middleware = [proxy(proxy_options)];
		// stubcell
		const stubcell = new StubCell();
		stubcell.loadEntry(config.server.mock.stubcell.entry, config.server.mock.stubcell.options);
		stubcell.server().listen(proxy_options.port, () => {
			console.log('Mock server started listening on port 5000');
		});
	}

	if (bs_options.proxy) { delete bs_options.server }
	return $.browser.init(bs_options);

});
