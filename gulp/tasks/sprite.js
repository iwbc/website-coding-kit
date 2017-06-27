'use strict';

const gulp   = require('gulp');
const path   = require('path');
const ms     = require('merge-stream');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * スプライトの生成
 */

gulp.task('sprite', ['sprite:png', 'sprite:svg']);

gulp.task('sprite:png', () => {
  return gulp.src(config.path.sprite.png.src)
    .pipe($.flatmap((stream, file) => {
      if (!file.isDirectory()) { return stream; }

      const dirname       = file.path.split(path.sep).pop();
      const relative_path = path.relative(config.path.style.dest.css, config.path.image.dest);
      const is_retina     = /2x$/.test(dirname);
      const options    = {
        cssTemplate        : 'gulp/templates/spritesmith.handlebars',
        cssSpritesheetName : dirname,
        imgName            : `${dirname}.png`,
        cssName            : `_${dirname}.scss`,
        imgPath            : `${relative_path}/${dirname}.png`,
        algorithm          : 'binary-tree',
        padding            : 6,
        cssOpts            : {
          is_retina : is_retina
        }
      }

      const data = gulp.src(`${file.path}/*.png`)
        .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
        .pipe($.spritesmith(options));
      const image = data.img.pipe(gulp.dest(config.path.sprite.png.dest.image));
      const style = data.css.pipe(gulp.dest(config.path.sprite.png.dest.style));

      return ms(image, style);
    }));
});

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
