'use strict';

const $           = require('../func.js');
const config      = require('../../gulpconfig.js');
const merge       = require('merge-stream');
const gulp        = require('gulp');
const spritesmith = require('gulp.spritesmith');
const plumber     = require('gulp-plumber');
const notify      = require('gulp-notify');

/**
 * Spite画像の作成
 */

gulp.task('sprite', function() {

	let data = gulp.src(config.spritesmith.path + '/*.png')
		.pipe(plumber({
			errorHandler: notify.onError({
				'title'   : 'ERROR : sprite',
				'message' : '<%= error.message %>'
			})
		}))
		.pipe(spritesmith(config.spritesmith.options));

	let img = data.img.pipe(gulp.dest($.app(config.paths.images.src)));
	let css = data.css.pipe(gulp.dest($.app(config.paths.css.src)));

	return merge(img, css);

});