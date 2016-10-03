'use strict';

const gulp      = require('gulp');
const path      = require('path');
const through2  = require('through2');
const rollup    = require('rollup').rollup;
const resolve   = require('rollup-plugin-node-resolve');
const cjs       = require('rollup-plugin-commonjs');
const string    = require('rollup-plugin-string');
const buble     = require('rollup-plugin-buble');
const uglify    = require('rollup-plugin-uglify');
const config    = require('../config.js');
const $         = require('../load.js');

/**
 * JSのモジュール依存解決、ES5へのトランスパイル
 */

gulp.task('script', ['script:__rollup'], () => {
	$.browser.reload();
});

gulp.task('script:__rollup', () => {
	return gulp.src(config.path.script.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe(through2.obj((file, encoding, callback) => {

			if (file.isDirectory()) { callback(); }

			const module_name = path.basename(file.path, '.js');
			let plugins = [
				resolve(),
				cjs(),
				string({
					include: '**/*',
					exclude: '**/*.js'
				}),
				buble(config.script.buble),
			];
			if (config.build.js_minify) { plugins.push(uglify({ preserveComments : 'some' })); }

			rollup({
				entry: file.path,
				plugins: plugins
			}).then((bundle) => {
				bundle.write({
					format     : 'iife',
					sourceMap  : config.build.sourcemap,
					dest       : `${config.path.script.dest}/${module_name}.js`,
					moduleName : module_name
				}).then(() => {
					callback(null, file);
				});
			}).catch((err) => {
				callback(err);
			});

		}));
});
