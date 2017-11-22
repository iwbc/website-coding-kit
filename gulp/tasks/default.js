'use strict';

const gulp = require('gulp');
const run  = require('run-sequence');

/**
 * サーバ起動、ファイル監視
 */

gulp.task('default', ['clean'], (callback) => {
 return run('sprite', ['ejs', 'style', 'script:watch', 'image'], 'copy', 'server', 'watch', callback);
});
