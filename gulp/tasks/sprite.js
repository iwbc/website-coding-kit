'use strict';

const gulp   = require('gulp');
const path   = require('path');
const ms     = require('merge-stream');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * スプライトの生成
 */

gulp.task('sprite', () => {
	return gulp.src(config.path.sprite.src)
		.pipe($.flatmap((stream, file) => {
			if (!file.isDirectory()) { return stream; }

			const dirname       = file.path.split(path.sep).pop();
			const relative_path = path.relative(config.path.style.dest, config.path.image.dest);
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
					scale  : is_retina ? .5 : 1
				}
			};

			const data = gulp.src(`${file.path}/*.png`)
				.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
				.pipe($.spritesmith(options));
			const image = data.img.pipe(gulp.dest(config.path.sprite.dest.image));
			const style = data.css.pipe(gulp.dest(config.path.sprite.dest.style));

			return ms(image, style);
		}));
});
