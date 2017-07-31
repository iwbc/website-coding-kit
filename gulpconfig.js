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
      css_minify : false,
      // JSのMinify化
      js_minify  : false,
      // SourceMapの出力
      sourcemaps : {
        css : true,
        js  : 'source-map'
      }
    },
    // 本番用ビルド
    production : {
      css_minify : true,
      js_minify  : true,
      sourcemaps : {
        css : false,
        js  : false
      }
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
      indentType  : 'space',
      indentWidth : 2
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
      dest  : {
        css     : 'dest/assets/css',
        sassdoc : 'docs/sass'
      }
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
        dest  : 'src/assets/images/sprites/svg'
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
