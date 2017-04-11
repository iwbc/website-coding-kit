'use strict';

const gulp   = require('gulp');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * SVGをフォント化
 */

const font_name = 'iconfont';

gulp.task('iconfont', () => {
	return gulp.src(config.path.iconfont.src)
		.pipe($.iconfontCss({
			fontName   : font_name,
			path       : 'gulp/templates/iconfont.scss',
			targetPath : config.iconfont.style_path,
			fontPath   : config.iconfont.font_path,
			cssClass   : 'u-iconfont'
		}))
		.pipe($.iconfont({
			fontName           : font_name,
			formats            : ['ttf', 'eot', 'woff', 'woff2', 'svg'],
			normalize          : true
		}))
		.pipe(gulp.dest(config.path.iconfont.dest));
});
