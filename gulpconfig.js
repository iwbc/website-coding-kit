'use strict';

/**
 * タスクの動作設定
 */

module.exports = {

	/**
	 * 出力先ディレクトリ
	 */

	dest : 'dest',

	/**
	 * 環境ごとのビルド設定
	 */

	build : {
		default : {
			css_minify : false,
			js_minify  : false,
			sourcemap  : true
		},
		production : {
			css_minify : false,
			js_minify  : false,
			sourcemap  : false
		}
	},

	/**
	 * サーバーの設定
	 */

	server : {
		// Browsersync
		// Options -> https://www.browsersync.io/docs/options/
		browsersync : {
			notify    : false,
			// 動的サイトの場合は、別途XAMPP等でサーバーを用意し、以下のproxyにドメインを記述する
			// 静的サイトの場合は、コメントアウトまたは削除する
			// proxy     : 'example.com',
			ghostMode : {
				clicks   : false,
				location : false,
				forms    : false,
				scroll   : false
			}
		}
	},

	/**
	 * Sassの設定
	 */

	style : {
		// gulp-pleeease
		// Options -> http://pleeease.io/docs/
		pleeease : {
			autoprefixer : {
				browsers : [
					'last 3 versions',
					'ie >= 11',
					'ios >= 9',
					'android >= 4.4'
				]
			},
			rem            : false,
			pseudoElements : false,
			opacity        : false,
			minifier       : false,
			rebaseUrls     : false
		},
		// gulp-sass
		// Options -> https://github.com/sass/node-sass#options
		sass : {
			outputStyle : 'expanded',
			indentType  : 'tab',
			indentWidth : 1
		}
	},

	/**
	 * 画像軽量化の設定
	 */

	image : {
		// 画像軽量化の有無効
		// true  : 有効
		// false : 無効
		enable : true,
		// imagemin-jpeg-recompress
		// Options -> https://github.com/imagemin/imagemin-jpeg-recompress
		jpegrecompress : {
			quality : 'high',
			max     : 95,
			min     : 60
		}
	},

	/**
	 * パスの設定
	 */

	path : {
		// EJS
		ejs : {
			src   : ['src/**/*.ejs', '!src/**/_*.ejs'],
			watch : 'src/**/*.ejs',
			dest  : 'dest',
		},
		// Sass
		style : {
			src   : 'src/assets/sass/**/*.scss',
			watch : 'src/assets/sass/**/*.scss',
			dest  : 'dest/assets/css'
		},
		// CSS
		css : {
			src   : 'src/assets/css/**/*.css',
			watch : 'src/assets/css/**/*.css',
			dest  : 'dest/assets/css'
		},
		// Image
		image : {
			src   : 'src/assets/images/**/*',
			watch : 'src/assets/images/**/*',
			dest  : 'dest/assets/images'
		},
		// Sprite
		sprite: {
			src   : 'src/assets/sprites/*',
			watch : 'src/assets/sprites/**/*',
			dest  : {
				style : 'src/assets/sass/foundations/sprites',
				image : 'src/assets/images'
			}
		},
		// Bower
		bower : {
			dest : 'dest/assets/vendor'
		},
		// Copy
		copy : [
			{
				src  : 'src/**/*.{html,php}',
				dest : 'dest'
			},
			{
				src  : 'src/assets/js/**/*.js',
				dest : 'dest/assets/js'
			},
			{
				src  : 'src/assets/fonts/**/*',
				dest : 'dest/assets/fonts'
			},
			{
				src  : 'src/assets/vendor/**/*',
				dest : 'dest/assets/vendor'
			}
		]
	}

}