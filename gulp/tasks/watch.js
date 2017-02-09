'use strict';

const gulp   = require('gulp');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * ファイル更新の監視
 */

gulp.task('watch', () => {
	config.path.copy.forEach((copy) => {
		$.watch(copy.src, () => {
			gulp.start('copy');
		});
	});
	$.watch(config.path.modernizr.watch, () => {
		gulp.start('modernizr');
	});
	$.watch(config.path.ejs.watch, () => {
		gulp.start('ejs');
	});
	$.watch(config.path.style.watch, () => {
		gulp.start('style');
	});
	$.watch(config.path.script.watch, () => {
		gulp.start('script');
	});
	$.watch(config.path.image.watch, () => {
		gulp.start('image');
	});
	$.watch(config.path.sprite.watch, () => {
		gulp.start('sprite');
	});
});
