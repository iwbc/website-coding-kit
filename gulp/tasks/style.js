'use strict';

const gulp    = require('gulp');
const extend  = require('extend');
const ms      = require('merge-stream');
const sassdoc = require('sassdoc');
const config  = require('../config.js');
const $       = require('../load.js');

/**
 * SassのLint、コンパイル、minify化、SassDocの生成
 */

gulp.task('style', () => {

	let sassdoc_options = extend({}, config.style.sassdoc);
	sassdoc_options.dest = config.path.style.dest.sassdoc;

	const css = gulp.src(config.path.style.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
		.pipe($.if(config.build.sourcemap, $.sourcemaps.init()))
		.pipe($.sassGlob())
		.pipe($.sass(config.style.sass))
		.pipe($.pleeease(config.style.pleeease))
		.pipe($.if(config.build.css_minify, $.csso()))
		.pipe($.if(config.build.sourcemap, $.sourcemaps.write()))
		.pipe(gulp.dest(config.path.style.dest.css))
		.pipe($.browser.stream());

	const doc = gulp.src(config.path.style.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.sassGlob())
		.pipe(sassdoc(sassdoc_options));

	return ms(css, doc);
});
