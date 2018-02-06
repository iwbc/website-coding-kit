'use strict';

const path   = require('path');
const gulp   = require('gulp');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * EJSのコンパイル
 */

gulp.task('ejs', () => {
  return gulp.src(config.path.ejs.src)
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.data((file) => {
      const src      = path.join(global.projectPath, config.src);
      const filePath = file.path.replace(src, '');
      const dirPath  = path.dirname(filePath);
      const extName  = path.extname(filePath);
      const relative = path.relative(dirPath, '/');
      return {
        __env          : config.ENV,
        __filePath     : filePath,
        __dirPath      : dirPath,
        __fileName     : path.basename(filePath),
        __baseName     : path.basename(filePath, extName),
        __extName      : extName,
        __relativePath : relative ? relative.replace(/\\/g, '/') + '/' : './'
      }
    }))
    .pipe($.ejs({}, {}, { ext : '.html' })).on('error', function() { this.emit('end'); })
    .pipe(gulp.dest(config.path.ejs.dest))
    .pipe($.browser.stream());
});
