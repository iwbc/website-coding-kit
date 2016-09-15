'use strict';

const gulp   = require('gulp');
const ms     = require('merge-stream');
const png    = require('imagemin-pngquant');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * スプライトの生成
 */

gulp.task('sprite', () => {
	const data = gulp.src(config.path.sprite.src)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe($.spritesmith(config.sprite));
	const image = data.img.pipe(gulp.dest(config.path.sprite.dest.image));
	const style = data.css.pipe(gulp.dest(config.path.sprite.dest.style));

	return ms(image, style);
});