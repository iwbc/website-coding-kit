'use strict';

const $          = require('../func.js');
const config     = require('../../gulpconfig.js');
const gulp       = require('gulp');
const sass       = require('gulp-sass');
const pleeease   = require('gulp-pleeease');
const sourcemaps = require('gulp-sourcemaps');
const plumber    = require('gulp-plumber');
const notify     = require('gulp-notify');
const regexp     = require('gulp-regexp-sourcemaps');

gulp.task('sass', ['sass:sass', 'sass:css']);

/**
 * Sassのコンパイル
 */

gulp.task('sass:sass', function() {
	return gulp.src($.app(config.paths.css.src) + '/**/*.scss')
		.pipe(plumber({
			errorHandler: notify.onError({
				'title'   : 'ERROR : Sass',
				'message' : '<%= error.message %>'
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sass(config.sass.options))
		// 「/* */」コメントを消す（「/*! */」「/*# */」は消さない）
		.pipe(regexp(/(?!\/\*+[!#])\/\*(\r|\n|.)+?\*\//g, ''))
		// 2個以上連続する改行を1個にまとめる
		.pipe(regexp(/^(\n|\r|\r\n){2,}/gm, "\n"))
		.pipe(pleeease(config.pleeease))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest($.app(config.paths.css.dist)));
});

/**
 * CSSファイルをdistへコピー
 */

gulp.task('sass:css', function() {
	return gulp.src($.app(config.paths.css.src) + '/**/*.css')
		.pipe(gulp.dest($.app(config.paths.css.dist)));
});