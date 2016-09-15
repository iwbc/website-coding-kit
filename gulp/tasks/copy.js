'use strict';

const gulp   = require('gulp');
const ms     = require('merge-stream');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * 指定ファイルを指定ディレクトリにコピー
 */

gulp.task('copy', () => {
	let stream = ms();
	config.path.copy.forEach((obj) => {
		stream.add(gulp.src(obj.src).pipe(gulp.dest(obj.dest)));
	});
	stream.on('end', () => {
		$.browser.stream();
	});
	return stream;
});