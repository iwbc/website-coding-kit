'use strict';

const gulp   = require('gulp');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * EJSのコンパイル
 */

gulp.task('ejs', () => {
  return gulp.src(config.path.ejs.src)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.ejs({}, {}, { ext : '.html' })).on('error', function() { this.emit('end'); })
    .pipe(gulp.dest(config.path.ejs.dest))
    .pipe($.browser.stream());
});
