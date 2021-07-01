'use strict'

/**
 * ソースディレクトリパス
 */

const src = 'src'

/**
 * 出力先ディレクトリパス
 */

const dest = 'public'

/**
 * build タスク
 */

const build = {
  // 開発用ビルド
  default: {
    // Minify
    minify: {
      css: false,
      js: false,
    },
    // SourceMapの出力
    sourcemaps: {
      css: true,
      js: 'source-map', // webpack Devtool -> https://webpack.js.org/configuration/devtool/#devtool
    },
    // 画像の最適化
    // 特定の拡張子の画像だけを処理対象にする場合は、配列で記述する
    // ex) optimizeImages : ['.jpg', '.png']
    optimizeImages: false,
  },
  // 本番用ビルド
  production: {
    minify: {
      css: true,
      js: true,
    },
    sourcemaps: {
      css: false,
      js: false,
    },
    optimizeImages: true,
  },
}

/**
 * server タスク
 */

const server = {
  // Browsersync
  // Options -> https://www.browsersync.io/docs/options/
  browsersync: {
    notify: false,
    ghostMode: false,
    directory: false,
    // 動的サイトの場合は、別途XAMPP等でサーバーを用意し、以下のproxyにドメインを記述する
    // 静的サイトの場合は、コメントアウトまたは削除する
    // proxy     : 'example.com',
  },
}

/**
 * ejs タスク
 */

const ejs = {
  dataFile: 'ejs.data.js',
}

/**
 * style タスク
 */

const style = {
  // PostCSS
  // https://github.com/postcss/postcss
  postcss: [require('postcss-easings'), require('autoprefixer')],
  // sassdoc
  // http://sassdoc.com/configuration/
  sassdoc: {
    sort: ['group<', 'access<', 'line<'],
    display: {
      access: ['public'],
      alias: false,
      watermark: false,
    },
    privatePrefix: '^__',
    noUpdateNotifier: true,
    verbose: true,
  },
}

/**
 * image タスク
 */

const image = {
  // imagemin-svgo
  // https://www.npmjs.com/package/imagemin-svgo
  // Options -> https://www.npmjs.com/package/svgo
  svgo: {
    plugins: [{ collapseGroups: false }],
  },
  // imagemin-jpeg-recompress
  // Options -> https://github.com/imagemin/imagemin-jpeg-recompress
  jpegrecompress: {
    quality: 'high',
    max: 95,
    min: 60,
  },
}

/**
 * パスの設定
 */

const path = {
  // EJS
  ejs: {
    src: [`${src}/**/*.ejs`, `${src}/**/*.ejs.php`, `!${src}/**/_*.ejs`, `!${src}/**/_*.ejs.php`],
    watch: [`${src}/**/*.ejs`, `${src}/**/*.ejs.php`, 'ejs.data.js'],
    dest: dest,
  },
  // Sass
  style: {
    src: `${src}/assets/scss/**/*.scss`,
    watch: `${src}/assets/scss/**/*.scss`,
    dest: {
      css: `${dest}/assets/css`,
      sassdoc: 'docs/scss',
    },
  },
  // 画像
  image: {
    src: `${src}/assets/images/**/*`,
    watch: `${src}/assets/images/**/*`,
    dest: `${dest}/assets/images`,
  },
  // SVG Sprite
  sprite: {
    src: `${src}/assets/sprites/*`,
    watch: `${src}/assets/sprites/**/*`,
    dest: `${dest}/assets/images/sprites`,
  },
  // 処理せずdestへコピーするファイル
  copy: [
    {
      src: [`${src}/**/*.{html,php}`, `!${src}/**/*.ejs.php`, `!${src}/assets/js/**/*`],
      dest: dest,
    },
    {
      src: `${src}/assets/vendors/**/*`,
      dest: `${dest}/assets/vendors`,
    },
    {
      src: [`${src}/*.{png,svg,ico,xml,json,txt}`, `!${src}/jsconfig.json`],
      dest: dest,
    },
    {
      src: `${src}/**/.{htaccess,htpasswd}`,
      dest: dest,
    },
  ],
}

/**
 * Configs
 */

module.exports = {
  src: src,
  dest: dest,
  build: build,
  server: server,
  ejs: ejs,
  style: style,
  image: image,
  path: path,
}
