'use strict';

const $        = require('../func.js');
const config   = require('../config.js');
const pngquant = require('imagemin-pngquant');
const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const changed  = require('gulp-changed');

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
				imagemin.mozjpeg({ quality: 95 }),
				imagemin.svgo(),
				pngquant()
			],
			{ verbose : true }
		))
		.pipe(gulp.dest($.app(config.paths.images.dist)));
});