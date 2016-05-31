'use strict';

const runSequence = require('run-sequence');
const gulp        = require('gulp');

/**
 * 開発タスクを開始する
 */

gulp.task('default', function() {
	runSequence(['bower', 'ejs', 'sprite'], 'image', 'sass', 'server', 'watch');
});