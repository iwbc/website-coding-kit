'use strict'

const path = require('path')
const gulp = require('gulp')
const config = require('../config')
const $ = require('../load')

/**
 * EJSのコンパイル
 */

gulp.task('ejs', () => {
  const dataFile = path.join(global.projectPath, config.ejs.dataFile)
  delete require.cache[dataFile]
  const data = require(dataFile)

  return gulp
    .src(config.path.ejs.src)
    .pipe($.plumber({ errorHandler: $.notify.onError('<%= error.message %>') }))
    .pipe(
      $.data((file) => {
        const src = path.join(global.projectPath, config.src)
        const filePath = file.path.replace(src, '')
        const dirname = path.dirname(filePath)
        const extname = path.extname(filePath)
        const relative = path.relative(dirname, '/')
        return {
          __env: config.ENV,
          __file: {
            path: filePath,
            dirname: dirname,
            name: path.basename(filePath),
            basename: path.basename(filePath, extname),
            extname: extname,
          },
          __src: relative ? relative.replace(/\\/g, '/') + '/' : './',
        }
      })
    )
    .pipe($.ejs(data, {}))
    .pipe(
      $.rename((file) => {
        if (file.extname === '.php') {
          file.basename = file.basename.replace('.ejs', '')
          file.extname = '.php'
        } else {
          file.extname = '.html'
        }
      })
    )
    .on('error', function () {
      this.emit('end')
    })
    .pipe(gulp.dest(config.path.ejs.dest))
    .pipe($.browser.stream())
})
