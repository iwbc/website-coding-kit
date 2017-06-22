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
		// 開発用ビルド
		default : {
			// CSSのMinify化
			css_minify       : false,
			// JSのMinify化
			js_minify        : false,
			// 統合済BowerパッケージのMinify化
			bower_minify     : true,
			// ModernizrのMinify化
			modernizr_minify : true,
			// SourceMapの出力
			sourcemap        : true
		},
		// 本番用ビルド
		production : {
			css_minify       : false,
			js_minify        : false,
			bower_minify     : true,
			modernizr_minify : true,
			sourcemap        : false
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
			ghostMode : false,
			directory : false
			// 動的サイトの場合は、別途XAMPP等でサーバーを用意し、以下のproxyにドメインを記述する
			// 静的サイトの場合は、コメントアウトまたは削除する
			// proxy     : 'example.com',
		}
	},

	/**
	 * Bowerの設定
	 */

	bower : {
		// 出力ファイル名（拡張子は含まない）
		output : 'libs',
		// 出力に含めないmainファイル
		excludes: []
	},

	/**
	 * Modernizrの設定
	 */

	modernizr : {
		// 出力ファイル名（拡張子は含まない）
		output : 'modernizr',
		// 設定
		// Options -> https://github.com/Modernizr/customizr
		settings : {
			options : [
				'setClasses'
			]
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
		},
		// sassdoc
		// http://sassdoc.com/configuration/
		sassdoc : {
			sort    : ['group<', 'access<', 'line<'],
			display : {
				access    : ['public'],
				alias     : false,
				watermark : false
			},
			noUpdateNotifier : true,
			verbose          : true
		}
	},

	/**
	 * JSの設定
	 */

	script : {
		// buble
		// Options -> https://buble.surge.sh/guide/#using-the-javascript-api
		buble  : {
			target: { ie: 9 }
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
		// Bower
		bower : {
			dest : 'src/assets/vendors'
		},
		// Modernizr
		modernizr : {
			dest  : 'src/assets/vendors'
		},
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
			dest  : {
				css     : 'dest/assets/css',
				sassdoc : 'docs/sass'
			}
		},
		// JS
		script : {
			src   : 'src/assets/js/*.js',
			watch : 'src/assets/js/**/*.js',
			dest  : 'dest/assets/js'
		},
		// Image
		image : {
			src   : 'src/assets/images/**/*',
			watch : 'src/assets/images/**/*',
			dest  : 'dest/assets/images'
		},
		// Sprite
		sprite : {
			png : {
				src   : 'src/assets/sprites/png/*',
				watch : 'src/assets/sprites/png/**/*',
				dest  : {
					style : 'src/assets/sass/foundations/sprites',
					image : 'src/assets/images/sprites/png'
				}
			},
			svg : {
				src   : 'src/assets/sprites/svg/*',
				watch : 'src/assets/sprites/svg/**/*',
				dest  : 'dest/assets/images/sprites/svg'
			}
		},
		// Copy
		copy : [
			{
				src  : ['src/**/*.{html,php}', '!src/assets/js/**/*'],
				dest : 'dest'
			},
			{
				src  : 'src/assets/fonts/**/*',
				dest : 'dest/assets/fonts'
			},
			{
				src  : 'src/assets/vendors/**/*',
				dest : 'dest/assets/vendors'
			}
		]
	}

}
