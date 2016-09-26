'use strict';

const gulp   = require('gulp');
const glob   = require('glob');
const buble  = require('rollup-plugin-buble');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * JSのモジュール依存解決、ES5へのトランスパイル
 */

gulp.task('script', () => {
	const entries = glob.sync(config.path.script.src, { ignore: '**/_*.js' });
	return gulp.src(config.path.script.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.if(config.build.sourcemap, $.sourcemaps.init()))
		.pipe($.rollup({
			entry   : entries,
			plugins : [
				buble(config.script.buble)
			]
		}))
		.pipe($.if(config.build.js_minify, $.uglify({ preserveComments : 'some' })))
		.pipe($.if(config.build.sourcemap, $.sourcemaps.write('./')))
		.pipe(gulp.dest(config.path.script.dest))
		.pipe($.browser.stream());
});