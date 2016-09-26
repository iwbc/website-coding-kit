'use strict';

const gulp   = require('gulp');
const bower  = require('main-bower-files');
const config = require('../config.js');
const $      = require('../load.js');

/**
 * Bowerパッケージのmainファイルを結合
 * CSSファイルは、Data URIに変換し、出力されるJSファイルに埋め込まれる
 */

gulp.task('bower', () => {
	const files = bower().filter(function(value) {
		return /\.(js|css)$/.test(value);
	});
	return gulp.src(files)
		.pipe($.jsfy({ dataurl : true }))
		.pipe($.concat(config.bower.output))
		.pipe($.if(config.build.js_minify, $.uglify({ preserveComments : 'some' })))
		.pipe(gulp.dest(config.path.bower.dest));
});
