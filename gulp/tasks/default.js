'use strict';

const gulp = require('gulp');
const run  = require('run-sequence');

/**
 * サーバ起動、ファイル監視
 */

gulp.task('default', () => {
	return run('server', 'watch');
});
