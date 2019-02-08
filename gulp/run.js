const gulp       = require('gulp');
const requireDir = require('require-dir');
const config     = require('./config');
const $          = require('./load');

requireDir('./tasks', { recursive: true });

/**
 * ファイル更新の監視
 */

gulp.task('watch', () => {
  config.path.copy.forEach((copy) => {
    gulp.watch(copy.src, gulp.task('copy'));
  });
  gulp.watch(config.path.ejs.watch, gulp.task('ejs'));
  gulp.watch(config.path.style.watch, gulp.task('style'));
  gulp.watch(config.path.image.watch, gulp.task('image'));
  gulp.watch(config.path.sprite.png.watch, gulp.task('sprite:png'));
  gulp.watch(config.path.sprite.svg.watch, gulp.task('sprite:svg'));
});

/**
 * サーバ起動、ファイル監視
 */

gulp.task('default', gulp.series(
  'clean',
  'sprite',
  gulp.parallel('ejs', 'style', 'script:watch', 'image'),
  'copy',
  'server',
  'watch'
));

/**
 * ビルド
 */

gulp.task('build', gulp.series(
  'clean',
  'sprite',
  gulp.parallel('ejs', 'style', 'script', 'image'),
  'copy'
));
