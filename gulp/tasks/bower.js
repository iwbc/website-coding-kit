'use strict';

const gulp   = require('gulp');
const ms     = require('merge-stream');
const bower  = require('main-bower-files');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * BowerパッケージのmainファイルをJS/CSSそれぞれ結合し出力する
 * CSSのurl(...)はdataURIに変換する
 */

gulp.task('bower', () => {

  const regexp_excludes = new RegExp(`(${config.bower.excludes.join('|')})$`, 'i');
  const js_files        = filterExcludes(bower().filter(value => /\.js$/.test(value)));
  const css_files       = filterExcludes(bower().filter(value => /\.css$/.test(value)));

  const js = gulp.src(js_files)
    .pipe($.concat(`${config.bower.output}.js`))
    .pipe($.if(config.build.bower_minify, $.uglify({ preserveComments : 'some' })))
    .pipe(gulp.dest(config.path.bower.dest));

  const css = gulp.src(css_files)
    .pipe($.cssBase64({
      maxWeightResource : 104857600
    }))
    .pipe($.concat(`${config.bower.output}.css`))
    .pipe($.if(config.build.bower_minify, $.csso()))
    .pipe(gulp.dest(config.path.bower.dest));

  return ms(js, css);

  function filterExcludes(files) {
    if (!config.bower.excludes.length) { return files; }
    return files.filter(value => !regexp_excludes.test(value));
  }
});
