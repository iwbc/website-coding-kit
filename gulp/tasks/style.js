'use strict';

const gulp     = require('gulp');

const config   = require('../config.js');
const $        = require('../load.js');

/**
 * SassのLint、コンパイル、minify化
 */

gulp.task('style', () => {
	const pattern_comment = /(?!\/\*+[!#])\/\*(\r|\n|.)+?\*\//g;
	const pattern_br      = /^(\n|\r|\r\n){2,}/gm;
	const has_compressed  = config.build.css_minify || config.style.sass.outputStyle === 'compressed';

	return gulp.src(config.path.style.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.if(config.build.sourcemap, $.sourcemaps.init()))
		.pipe($.sass(config.style.sass))
		.pipe($.pleeease(config.style.pleeease))
		.pipe($.if(config.build.css_minify, $.csso()))
		// 「/* */」コメントを消す（「/*! */」「/*# */」は消さない）
		.pipe($.if(!has_compressed, $.regexpSourcemaps(pattern_comment, '')))
		// 2個以上連続する改行を1個にまとめる
		.pipe($.if(!has_compressed, $.regexpSourcemaps(pattern_br, "\n")))
		.pipe($.if(config.build.sourcemap, $.sourcemaps.write()))
		.pipe(gulp.dest(config.path.style.dest))
		.pipe($.browser.stream());
});