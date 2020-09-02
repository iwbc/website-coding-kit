'use strict'

const gulp = require('gulp')
const webpack = require('webpack')
const config = require('../../webpack.config')
const $ = require('../load')

let watch = false

/**
 * JSのモジュール依存解決、ES5へのトランスパイル
 */

gulp.task('script', async () => {
  await new Promise((resolve) => {
    const wp = webpack(config)
    const callback = (err, stats) => {
      if (err) {
        reject(new $.util.PluginError('script', err.message))
      } else {
        // eslint-disable-next-line no-console
        console.log(
          stats.toString({
            chunks: false,
            modules: false,
            colors: true,
          })
        )
        $.browser.reload()
        resolve()
      }
    }
    watch ? wp.watch(200, callback) : wp.run(callback)
  })
})

gulp.task('script:watch', async () => {
  watch = true
  await gulp.task('script')()
})
