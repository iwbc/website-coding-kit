'use strict';

const $       = require('../func.js');
const config  = require('../../gulpconfig.js');
const gulp    = require('gulp');
const ejs     = require('gulp-ejs');
const plumber = require('gulp-plumber');
const notify  = require('gulp-notify');

/**
 * EJS
 */

gulp.task('ejs', function() {
	return gulp.src([
		config.paths.app + '/**/*.ejs',
		'!' + config.paths.app + '/**/_*.ejs'
	])
		.pipe(plumber({
			errorHandler: notify.onError({
				'title'   : 'ERROR : EJS',
				'message' : '<%= error.message %>'
			})
		}))
		.pipe(ejs({}, { ext: '.html' }))
		.pipe(gulp.dest(config.paths.app));
});