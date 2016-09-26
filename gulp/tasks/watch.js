'use strict';

const gulp   = require('gulp');
const config = require('../config.js');

/**
 * ファイル更新の監視
 */

gulp.task('watch', () => {
	let copies = [];
	config.path.copy.forEach((obj) => {
		copies.push(obj.src);
	});

	gulp.watch(copies                  , ['copy']);
	gulp.watch(config.path.ejs.watch   , ['ejs']);
	gulp.watch(config.path.style.watch , ['style']);
	gulp.watch(config.path.script.watch, ['script']);
	gulp.watch(config.path.image.watch , ['image']);
	gulp.watch(config.path.sprite.watch, ['sprite']);
});
