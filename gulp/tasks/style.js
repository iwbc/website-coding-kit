'use strict'

const gulp = require('gulp')
const extend = require('extend')
const ms = require('merge-stream')
const sassdoc = require('sassdoc')
const config = require('../config')
const $ = require('../load')

/**
 * SassのLint、コンパイル、minify化、SassDocの生成
 */

gulp.task('style', () => {
  let sassdoc_options = extend({}, config.style.sassdoc)
  sassdoc_options.dest = config.path.style.dest.sassdoc

  const css = gulp
    .src(config.path.style.src, { sourcemaps: config.build.sourcemaps.css })
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.sassGlob())
    .pipe($.dartSass({ fiber: require('fibers') }))
    .pipe($.postcss(config.style.postcss))
    .pipe($.if(config.build.minify.css, $.csso()))
    .pipe(gulp.dest(config.path.style.dest.css, { sourcemaps: '.' }))
    .pipe($.browser.stream())

  const doc = gulp
    .src(config.path.style.src)
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe($.sassGlob())
    .pipe(sassdoc(sassdoc_options))

  return ms(css, doc)
})
