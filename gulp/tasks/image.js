'use strict';

const $              = require('../func.js');
const config         = require('../../gulpconfig.js');
const pngquant       = require('imagemin-pngquant');
const jpegrecompress = require('imagemin-jpeg-recompress');
const gulp           = require('gulp');
const imagemin       = require('gulp-imagemin');
const changed        = require('gulp-changed');

/**
 * 画像の最適化
 */

gulp.task('image', function() {
	return gulp.src([
		$.app(config.paths.images.src) + '/**/*',
		'!' + config.spritesmith.path,
		'!' + config.spritesmith.path + '/**/*.png'
	])
		.pipe(changed($.app(config.paths.images.dist)))
		.pipe(imagemin(
			[
				imagemin.gifsicle(),
				imagemin.svgo(),
				pngquant(),
				jpegrecompress({
					quality : 'high',
					max     : 95,
					min     : 60
				})
			],
			{ verbose : true }
		))
		.pipe(gulp.dest($.app(config.paths.images.dist)));
});