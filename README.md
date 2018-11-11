# Website Coding Kit

## 動作要件

Website Coding Kitの実行には以下のツールが必要です。  
実行環境にインストールされていない場合は、各ツールのWebサイトからインストールしてください。

- [Node.js](https://nodejs.org/ja/) v6.0 - 9.x `必須`
- [Yarn](https://yarnpkg.com/) v1.3.2 - `必須`
- [Gulp](http://gulpjs.com/) v3.9 -

## セットアップ

プロジェクトの新規開始、またはプロジェクトのリポジトリをクローンして再開する場合には、以下のコマンドを実行して、Website Coding Kitのセットアップを行います。

```
yarn setup
```

## 各種設定

Website Coding Kitの動作設定は、`/gulp.config.js`に記述されています。  
基本的に変更する必要はありませんが、変更する場合は、当該ファイルのコメントを確認してください。

## 使い方

### ビルド

以下のビルドを一括して行います。

- PNG/SVGスプライトシートの生成
- EJS/Sass/JSのコンパイル
- 画像の最適化
- 公開用データディレクトリへのファイルのコピーなど

#### 開発用ビルド

開発用のビルドを行います。  
デフォルトの設定は、以下のとおりです。

- CSS/JSのMinify化 : 無効
- SourceMapの出力 : 有効

**公開用データディレクトリ内の状態を最新にするため、開発前やリポジトリをpullした後には、必ずビルドを行ってください。**

```console
yarn build
```

#### 本番用ビルド

開発用ビルドコマンドに`--env=production`のオプションを付与することで、本番用のビルド設定に従ったビルドを行います。  
デフォルトの設定は、以下のとおりです。

- CSS/JSのMinify化 : 無効
- SourceMapの出力 : 無効

```console
yarn build --env=production
```

### ファイルの更新監視とWebサーバーの起動

ファイル更新監視の開始とWebサーバーの起動を行います。  
ファイルの更新を検知すると、ビルドとページのリロードが行われます。

```console
yarn dev
```

### PNG/SVGスプライトシートの生成

#### PNGスプライトシート

`/src/assets/sprites/png`直下のディレクトリごとに、スプライトシートとスプライトシート用のSassファイルを出力します。

##### 例

`/src/assets/sprites/png`ディレクトリに`sample@2x`ディレクトリを作成し、この中に`down.png`と`up.png`を入れた場合は、`/public/assets/images/sprites/png`ディレクトリに`sample2x.png`というスプライトシートと、`/src/assets/sass/foundations/sprites`ディレクトリに`_sample@2x.scss`ファイルが出力されます。

Retina用のスプライトシートを生成する場合は、スプライトシートのディレクトリ名の末尾に`@2x`を付与してください。  
`@2x`を`@3x`のようにすることで、更に高解像度なディスプレイにも対応可能です。

###### Mixinを使用してスプライト画像を表示する

```scss
// @include sprite("{スプライトシート名}-{倍率}-{スプライト名}");

.element {
	@include sprite("sample-down");
}

// Retina用
.element-2x {
	@include sprite("sample-2x-down");
}
```

###### Classを使用してスプライト画像を表示する

```html
<!-- m_sprite-{スプライトシート名}-{倍率}-{スプライト名} -->

<span class="m_sprite-sample-down"></span>

<!-- Retina用 -->
<span class="m_sprite-sample-2x-down"></span>
```

#### SVGスプライトシート

`/src/assets/sprites/svg`直下のディレクトリごとに、スプライトシートを出力します。

##### 例

`/src/assets/sprites/svg`ディレクトリに`sample`ディレクトリを作成し、この中に`down.svg`と`up.svg`を入れた場合は、`/public/assets/images/sprites/svg`ディレクトリに`sample.svg`というSVGスプライトシートファイルが出力されます。

###### SVGスプライト画像を表示する

```html
<!-- <title>は省略可 -->
<!-- <use :xlink:href="{スプライトシートのファイルパス}#{スプライト画像名}" /> -->

<svg>
  <title>Image title</title>
  <use xlink:href="/public/assets/images/sprites/svg/sample.svg#down" />
</svg>
```

- IE11は、use要素によるSVGの表示に対応していないため、[svg4everybody](https://github.com/jonathantneal/svg4everybody)が別途必要です。

## 主要ファイル構成

```sh
┣ docs/
┃  ┗ sass/ # 組込済Sassファイルについてのドキュメントディレクトリ。
┣ public/ # 公開用データディレクトリ。
┣ src/ # ソースデータディレクトリ。
┃  ┣ assets/
┃  ┃  ┣ css/
┃  ┃  ┃  ┗ sanitize.css
┃  ┃  ┣ fonts/ # Webフォントディレクトリ。
┃  ┃  ┃  ┗ NotoSansCJKjp-* # 第一水準漢字までのサブセット化済みのNoto Sans JPのWebフォントファイル。
┃  ┃  ┣ images/
┃  ┃  ┣ js/
┃  ┃  ┣ sass/ # 以下、FLOCSSベースのCSS設計ガイドラインに準拠しています。
┃  ┃  ┃  ┣ foundations/
┃  ┃  ┃  ┣ layouts/
┃  ┃  ┃  ┣ objects/
┃  ┃  ┃  ┣ vendors/ # ライブラリなど第三者制作のスタイルはここに保存します。
┃  ┃  ┃  ┗ style.scss
┃  ┃  ┣ sprites/
┃  ┃  ┃  ┣ png/
┃  ┃  ┃  ┗ svg/
┃  ┃  ┗ vendors/ # ライブラリなど第三者制作のJSはここに保存します。
┃  ┗ index.ejs
┗ gulp.config.js # Website Coding Kitの動作設定ファイル。
```

**Gitリポジトリで空のディレクトリを保持するため、`.gitkeep`ファイルだけが入っているディレクトリがあります。  
何らかのファイルをこのディレクトリに追加した場合は、`.gitkeep`ファイルを削除してください。**

## ドキュメント

### SassDoc

Website Coding Kitに組込済Sassファイルの仕様については、`/docs/sass/index.html`を確認してください。

### FLOCSS

Website Coding Kitに組込済のSassファイル構成は、[FLOCSSベースのCSS設計ガイドライン](https://github.com/iwbc/guide-css-design)に準拠しています。
