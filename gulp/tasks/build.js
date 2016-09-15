'use strict';

const gulp = require('gulp');
const run  = require('run-sequence');

/**
 * ビルド
 */

gulp.task('build', ['clean'], (callback) => {
	return run(['bower', 'sprite'], ['ejs', 'css', 'style', 'image', 'copy'], callback);
});