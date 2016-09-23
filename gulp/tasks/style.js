'use strict';

const gulp     = require('gulp');
const config   = require('../config.js');
const $        = require('../load.js');

/**
 * SassのLint、コンパイル、minify化
 */

gulp.task('style', () => {
	return gulp.src(config.path.style.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
		.pipe($.if(config.build.sourcemap, $.sourcemaps.init()))
		.pipe($.sass(config.style.sass))
		.pipe($.pleeease(config.style.pleeease))
		.pipe($.if(config.build.css_minify, $.csso()))
		.pipe($.if(config.build.sourcemap, $.sourcemaps.write()))
		.pipe(gulp.dest(config.path.style.dest))
		.pipe($.browser.stream());
});