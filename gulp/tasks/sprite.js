'use strict';

const gulp   = require('gulp');
const path   = require('path');
const buffer = require('vinyl-buffer');
const ms     = require('merge-stream');
const png    = require('imagemin-pngquant');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * PNGスプライトの生成
 */

gulp.task('sprite', ['sprite:png', 'sprite:svg']);

gulp.task('sprite:png', () => {
  return gulp.src(config.path.sprite.png.src)
    .pipe($.flatmap((stream, file) => {
      if (!file.isDirectory()) { return stream; }

      const dirname       = file.path.split(path.sep).pop();
      const relative_path = path.relative(config.path.style.dest.css, config.path.image.dest);
      const scale         = /@(\d)x$/.exec(dirname);
      const options       = {
        cssTemplate        : 'gulp/templates/spritesmith.handlebars',
        cssSpritesheetName : dirname.replace(/@(\dx)$/, '-$1'),
        imgName            : `${dirname}.png`,
        cssName            : `_${dirname}.scss`,
        imgPath            : `${relative_path}/${dirname}.png`,
        algorithm          : 'binary-tree',
        padding            : 6,
        cssOpts            : {
          scale : scale ? scale[1] : 1
        }
      };

      const data = gulp.src(`${file.path}/*.png`)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.spritesmith(options));
      const image = data.img
        .pipe(buffer())
        .pipe($.if(
          config.image.enable,
          $.imagemin([ png() ], { verbose : true })
        ))
        .pipe(gulp.dest(config.path.sprite.png.dest.image));
      const style = data.css.pipe(gulp.dest(config.path.sprite.png.dest.style));

      return ms(image, style);
    }));
});

/**
 * SVGスプライトの生成
 */

gulp.task('sprite:svg', () => {
  return gulp.src(config.path.sprite.svg.src)
    .pipe($.flatmap((stream, file) => {
      if (!file.isDirectory()) { return stream; }
      const dirname = file.path.split(path.sep).pop();

      return gulp.src(`${file.path}/*.svg`)
        .pipe($.svgSprite({
          mode  : {
            symbol: {
              dest   : '.',
              sprite : `${dirname}.svg`
            }
          },
          shape : {
            transform : [{
              svgo : {
                plugins : [
                  { removeTitle : true },
                  { removeAttrs : { attrs: 'fill' } }
                ]
              }
            }]
          }
        }))
        .pipe(gulp.dest(config.path.sprite.svg.dest));
    }));
});
