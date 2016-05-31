'use strict';

const $          = require('../func.js');
const config     = require('../config.js');
const bowerFiles = require('main-bower-files');
const gulp       = require('gulp');
const concat     = require('gulp-concat');
const uglify     = require('gulp-uglify');
const jsfy       = require('gulp-jsfy');

/**
 * Bowerパッケージのmainファイルを結合・圧縮しvendorディレクトリに配置
 * CSSファイルは、CSS全体をData URLに変換し、出力されるJSファイルに埋め込まれる
 */

gulp.task('bower', function() {
	let files = bowerFiles().filter(function(value) {
		return /\.(js|css)$/.test(value);
	});
	return gulp.src(files)
		.pipe(jsfy({ dataurl: true }))
		.pipe(concat('libs.js'))
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(gulp.dest($.app(config.paths.vendor)));
});