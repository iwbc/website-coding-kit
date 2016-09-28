'use strict';

const gulp    = require('gulp');
const path    = require('path');
const rollup  = require('rollup').rollup;
const resolve = require('rollup-plugin-node-resolve');
const cjs     = require('rollup-plugin-commonjs');
const buble   = require('rollup-plugin-buble');
const uglify  = require('rollup-plugin-uglify');
const config  = require('../config.js');
const $       = require('../load.js');

/**
 * JSのモジュール依存解決、ES5へのトランスパイル
 */

gulp.task('script', () => {
	const module_name = path.basename(config.path.script.src, '.js');
	let plugins = [
		resolve(),
		cjs(),
		buble(config.script.buble)
	];
	if (config.build.js_minify) { plugins.push(uglify({ preserveComments : 'some' })); }

	return rollup({
		entry   : config.path.script.src,
		plugins : plugins
	}).then((bundle) => {
		$.browser.reload();
		return bundle.write({
			format     : 'iife',
			sourceMap  : config.build.sourcemap,
			dest       : `${config.path.script.dest}/${module_name}.js`,
			moduleName : module_name
		});
	});
});
