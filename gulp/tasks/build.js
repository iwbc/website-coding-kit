'use strict';

const gulp = require('gulp');
const run  = require('run-sequence');

/**
 * ビルド
 */

gulp.task('build', ['clean'], (callback) => {
	return run(['sprite', 'iconfont'], ['bower', 'modernizr', 'ejs', 'style', 'script', 'image'], 'copy', callback);
});
