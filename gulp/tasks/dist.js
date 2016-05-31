'use strict';

const $           = require('../func.js');
const config      = require('../config.js');
const del         = require('del');
const runSequence = require('run-sequence');
const gulp        = require('gulp');
const csso        = require('gulp-csso');
const uglify      = require('gulp-uglify');
const replace     = require('gulp-replace');

/**
 * 公開用にビルドし、データをまとめる
 */

gulp.task('dist', function() {
	runSequence(['bower', 'ejs', 'sprite', 'dist:clean'], 'image', 'sass', 'dist:copy', ['dist:css', 'dist:js']);
});

/**
 * 公開用データをクリーンアップ
 */

gulp.task('dist:clean', del.bind(null,
	[
		config.paths.dist + '/*',
		'!' + config.paths.dist + '/.git'
	],
	{ dot: true }
));

/**
 * appからファイルをコピー
 */

gulp.task('dist:copy', function() {
	return gulp.src(
		[
			config.paths.app + '/**/*',
			'!' + config.paths.app + '/**/*.ejs',
			'!' + $.app(config.paths.css.src),
			'!' + $.app(config.paths.css.src) + '/**/*',
			'!' + $.app(config.paths.images.src),
			'!' + $.app(config.paths.images.src) + '/**/*',
			'!' + config.paths.app + '/**/{.DS_Store, Thumbs.db, ehthumbs.db}'
		],
		{ dot: true })
		.pipe(gulp.dest(config.paths.dist));
});

/**
 * CSSのminify
 */

gulp.task('dist:css', function() {

	if (!config.dist.csso.enable) {
		// ソースマップを削除
		return gulp.src($.dist(config.paths.css.dist) + '/**/*.css')
			.pipe(replace(/\/\*#\ssourceMappingURL(.+)?\s\*\//gi, ''))
			.pipe(gulp.dest($.dist(config.paths.css.dist)));
	}

	return gulp.src($.dist(config.paths.css.dist) + '/**/*.css')
		.pipe(csso({
			restructure : false
		}))
		.pipe(gulp.dest($.dist(config.paths.css.dist)));

});

/**
 * JSのminify
 */

gulp.task('dist:js', function() {

	if (!config.dist.uglify.enable) { return; }

	return gulp.src($.dist(config.paths.js) + '/**/*.js')
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(gulp.dest($.dist(config.paths.js)));

});