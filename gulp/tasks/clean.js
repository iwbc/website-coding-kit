'use strict'

const gulp = require('gulp')
const del = require('del')
const config = require('../config')

/**
 * 指定ディレクトリ以下を削除する
 */

gulp.task('clean', del.bind(null, [`${config.dest}/*`, `!${config.dest}/.git*`], { dot: true }))
