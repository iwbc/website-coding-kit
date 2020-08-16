const gulp = require('gulp')
const requireDir = require('require-dir')
const config = require('./config')

requireDir('./tasks', { recursive: true })

/**
 * ファイル更新の監視
 */

gulp.task('watch', () => {
  config.path.copy.forEach((copy) => {
    gulp.watch(copy.src, gulp.series('copy'))
  })
  gulp.watch(config.path.ejs.watch, gulp.series('ejs'))
  gulp.watch(config.path.style.watch, gulp.series('style'))
  gulp.watch(config.path.image.watch, gulp.series('image'))
  gulp.watch(config.path.sprite.png.watch, gulp.series('sprite:png'))
  gulp.watch(config.path.sprite.svg.watch, gulp.series('sprite:svg'))
})

/**
 * サーバ起動、ファイル監視
 */

gulp.task(
  'default',
  gulp.series('clean', 'sprite', gulp.parallel('ejs', 'style', 'script:watch', 'image'), 'copy', 'server', 'watch')
)

/**
 * ビルド
 */

gulp.task('build', gulp.series('clean', 'sprite', gulp.parallel('ejs', 'style', 'script', 'image'), 'copy'))
