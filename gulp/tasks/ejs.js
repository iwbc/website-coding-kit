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
      const filename = file.path.replace(src, '');
      const dirname  = path.dirname(filename);
      const basename = path.basename(filename);
      const extname  = path.extname(filename);
      const relative = path.relative(dirname, '/');
      return {
        __path : {
          filename : filename.replace(/\\/g, '/'),
          dirname  : dirname.replace(/\\/g, '/'),
          basename : basename,
          extname  : extname,
          relative : relative ? relative.replace(/\\/g, '/') + '/' : ''
        }
      }
    }))
    .pipe($.ejs({}, {}, { ext : '.html' })).on('error', function() { this.emit('end'); })
    .pipe(gulp.dest(config.path.ejs.dest))
    .pipe($.browser.stream());
});
