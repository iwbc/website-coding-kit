'use strict';

const gulp   = require('gulp');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * Modernizrのビルド
 */

gulp.task('modernizr', () => {
	return gulp.src([
		config.path.style.watch,
		config.path.script.watch
	])
		.pipe($.modernizr(config.modernizr.output + '.js', config.modernizr.settings))
		.pipe($.if(config.build.modernizr_minify, $.uglify({ preserveComments : 'some' })))
		.pipe(gulp.dest(config.path.modernizr.dest));
});
