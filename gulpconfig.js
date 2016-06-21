'use strict';

/**
 * 各種動作設定
 */

// 各ディレクトリパス
let paths = {
	app    : 'app',
	dist   : 'dist',
	// 以下appまたはdistからの相対パスを記述
	assets : 'assets',
	css    : {
		src  : 'assets/css/src',
		dist : 'assets/css/dist'
	},
	images : {
		src  : 'assets/images/src',
		dist : 'assets/images/dist'
	},
	js     : 'assets/js',
	vendor : 'assets/vendor',
};

// スプライト画像のソースファイルを配置するディレクトリ名
// paths.app/paths.images.src/sprite_dir
let sprite_dir = '_sprite';

// BrowserSyncの設定
let browsersync = {

	notify : false,

	// 静的サイトの場合
	server : {
		baseDir : paths.app
	}

	// 動的サイトの場合
	// 別途XAMPP等でサーバーを用意する
	// proxy : 'example.dev'

};

// pleeeaseの設定
let pleeease = {
	// ベンダープリフィックスで対応するブラウザを指定
	autoprefixer : {
		browsers : [
			'last 3 versions',
			'ie >= 11',
			'ios >= 9',
			'android >= 4.4'
		]
	},
	// 以下IE8用
	rem     : false,
	filters : false,
	opacity : false
};

// gulp-ejsの設定
let ejs = {
	options : {
		// 出力するファイルの拡張子
		ext : '.html'
	}
};

// gulp-sassの設定
let sass = {
	options : {
		indentType     : 'tab',
		indentWidth    : 1
	}
};

// gulp.spritesmithの設定
let spritesmith = {
	options: {
		imgName       : 'sprite.png',
		retinaImgName : 'sprite@2x.png',
		imgPath       : '../../images/dist/sprite.png',
		retinaImgPath : '../../images/dist/sprite@2x.png',
		cssName       : '_sprite.scss',
		cssFormat     : 'scss_retina',
		padding       : 10
	}
};

// distタスク実行時の設定
let dist = {
	csso : {
		// CSSのminifyを行う場合は、trueを指定する
		enable  : false
	},
	uglify : {
		// JSのminifyを行う場合は、trueを指定する
		enable  : false
	}
}

//////////////////////////////////////////////////////////////
// 以下は変更不要
//////////////////////////////////////////////////////////////

pleeease         = Object.assign(pleeease, { minifier : false, rebaseUrls : false });
sass.options     = Object.assign(sass.options, { outputStyle : 'expanded' });
spritesmith.path = paths.app + '/' + paths.images.src + '/' + sprite_dir;
if (spritesmith.options.cssFormat == 'scss_retina') {
	spritesmith.options = Object.assign(spritesmith.options, { retinaSrcFilter : spritesmith.path + '/*@2x.png' });
}

module.exports = {
	paths       : paths,
	server      : browsersync,
	pleeease    : pleeease,
	ejs         : ejs,
	sass        : sass,
	spritesmith : spritesmith,
	dist        : dist
};