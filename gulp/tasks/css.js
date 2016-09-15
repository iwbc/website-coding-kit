'use strict';

const gulp   = require('gulp');
const ms     = require('merge-stream');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * CSSのminify化
 */

gulp.task('css', () => {
	return gulp.src(config.path.css.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.if(config.build.css_minify && config.build.sourcemap, $.sourcemaps.init()))
		.pipe($.if(config.build.css_minify, $.csso()))
		.pipe($.if(config.build.css_minify && config.build.sourcemap, $.sourcemaps.write()))
		.pipe(gulp.dest(config.path.css.dest))
		.pipe($.browser.stream());
});