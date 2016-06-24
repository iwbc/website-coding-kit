'use strict';

const $           = require('../func.js');
const config      = require('../../gulpconfig.js');
const browserSync = require('../browser-sync.js');
const del         = require('del');
const runSequence = require('run-sequence');
const gulp        = require('gulp');
const watch       = require('gulp-watch');

/**
 * ファイルの更新監視
 */

gulp.task('watch', function() {

	// EJS
	watch(config.paths.app + '/**/*.ejs', function(file) {
		if (file.event == 'unlink') {
			file.extname = config.ejs.options.ext;
			del(file.path);
		}
		gulp.start('ejs');
	});

	// Sass
	watch($.app(config.paths.css.src) + '/**/*.scss', function(file) {
		if (file.event == 'unlink') {
			file.extname = '.css';
			file.path = file.path.replace(new RegExp($.app(config.paths.css.src), 'g'), $.app(config.paths.css.dist));
			del(file.path);
		}
		gulp.start('sass');
	});

	// CSS
	watch($.app(config.paths.css.src) + '/**/*.css', function(file) {
		if (file.event == 'unlink') {
			file.path = file.path.replace(new RegExp($.app(config.paths.css.src), 'g'), $.app(config.paths.css.dist));
			del(file.path);
		}
		gulp.start('sass:css');
	});

	// Image (src)
	watch(
		[
			$.app(config.paths.images.src) + '/**/*',
			'!' + config.spritesmith.path,
			'!' + config.spritesmith.path + '/**/*.png'
		],
		function(file) {
			if (file.event == 'unlink') {
				file.path = file.path.replace(new RegExp($.app(config.paths.images.src), 'g'), $.app(config.paths.images.dist));
				del(file.path);
			}
			gulp.start('image');
		}
	);

	// Sprite
	watch(config.spritesmith.path + '/*.png', function() {
		runSequence('sprite', 'image');
	});

	// HTML
	// Image (dist)
	// CSS
	// JS
	watch([
		config.paths.app + '/**/*.{html,php}',
		$.app(config.paths.images.dist) + '/**/*',
		$.app(config.paths.css.dist) + '/**/*.css',
		$.app(config.paths.js) + '/**/*.js'
	], browserSync.reload);

});