'use strict'

const gulp = require('gulp')
const path = require('path')
const config = require('../config')
const $ = require('../load')

/**
 * SVGスプライトの生成
 */

gulp.task('sprite', () => {
  return gulp.src(config.path.sprite.src).pipe(
    $.flatmap((stream, file) => {
      if (!file.isDirectory()) {
        return stream
      }
      const dirname = file.path.split(path.sep).pop()

      return gulp
        .src(`${file.path}/*.svg`)
        .pipe(
          $.svgSprite({
            mode: {
              symbol: {
                dest: '.',
                sprite: `${dirname}.svg`,
              },
            },
            shape: {
              transform: [
                {
                  svgo: {
                    plugins: [{ removeTitle: true }, { removeAttrs: { attrs: 'fill' } }],
                  },
                },
              ],
            },
          })
        )
        .pipe(gulp.dest(config.path.sprite.dest))
    })
  )
})
