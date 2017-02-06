'use strict';

const gulp = require('gulp');
const run  = require('run-sequence');

/**
 * ビルド
 */

gulp.task('build', ['clean'], (callback) => {
	return run('sprite', ['bower', 'modernizr', 'ejs', 'style', 'css', 'script', 'image', 'copy'], callback);
});
