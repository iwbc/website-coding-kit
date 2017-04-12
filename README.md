# Website Coding Kit v1.5.2

## 動作要件

Website Coding Kitの実行には以下のツールが必要です。  
実行環境にインストールされていない場合は、各ツールのWebサイトからインストールしてください。

- [Node.js](https://nodejs.org/ja/) v5.0以上 `必須`
- [Yarn](https://yarnpkg.com/) v0.21以上 `必須`
- [Gulp](http://gulpjs.com/) v3.9以上
- [Bower](https://bower.io/) v1.7以上

## セットアップ

プロジェクトの新規開始、またはプロジェクトのリポジトリをクローンして再開する場合には、以下のコマンドを実行して、Website Coding Kitのセットアップを行います。

```
yarn run init
```

## 各種設定

Website Coding Kitの動作設定は、`/gulpconfig.js`に記述されています。  
基本的に変更する必要はありませんが、変更する場合は、当該ファイルのコメントを確認してください。

## 使い方

### ビルド

以下のビルドを一括して行います。

- スプライトシートの生成
- Bowerパッケージの統合
- EJS/Sass/JSのコンパイル
- 画像の最適化
- `/dest`ディレクトリへのファイルのコピーなど

#### 開発用ビルド

開発用のビルドを行います。  
デフォルトの設定は、以下のとおりです。

- CSS/JSのMinify化 : 無効
- BowerパッケージのMinify化 : 有効
- SourceMapの出力 : 有効

**destディレクトリ内の状態を最新にするため、開発前やリポジトリをpullした後には、必ずビルドを行ってください。**

```console
yarn run build
```

#### 本番用ビルド

開発用ビルドコマンドに`-- --env=production`のオプションを付与することで、本番用のビルド設定に従ったビルドを行います。  
デフォルトの設定は、以下のとおりです。

- CSS/JSのMinify化 : 無効
- Bowerパッケージ/ModernizrのMinify化 : 有効
- SourceMapの出力 : 無効

```console
yarn run build -- --env=production
```

### ファイルの更新監視とWebサーバーの起動

ファイル更新監視の開始とWebサーバーの起動を行います。  
ファイルの更新を検知すると、ビルドとページのリロードが行われます。

```console
yarn run start
```

### Bowerパッケージのインストール

Bowerパッケージをインストールするには、以下のコマンドを実行します。  
※ Bowerがインストールされている必要があります。

```
bower install --save {package-name}
yarn run bower
```

なお、出来るだけパッケージのバージョンを固定するために、`bower.json`に記述されているパッケージのバージョン表記の先頭から`^`を取り除くことを推奨します。

### Modernizrのビルド

設定およびJS/SCSSからModernizrのビルドを行うには、以下のコマンドを実行します。

```console
yarn run modernizr
```

### スプライトシートの生成

`/src/assets/sprites`直下のディレクトリごとに、スプライトシートとスプライトシート用のSassファイルを出力します。

#### 例

`/src/assets/sprites`ディレクトリに`sample2x`ディレクトリを作成し、この中に`down.png`と`up.png`を入れた場合は、`/src/assets/images`ディレクトリに`sample2x.png`というスプライトシートと、`/src/assets/sass/foundations/sprites`ディレクトリに`_sample2x.scss`ファイルが出力されます。

Retina用のスプライトシートを生成する場合は、スプライトシートのディレクトリ名の末尾に`2x`を付与してください。

MixinまたはClassを使用して、スプライト画像を表示できます。

##### Mixinを使用してスプライト画像を表示する

```scss
// @include sprite("{スプライトシートディレクトリ名}-{スプライト画像ファイル名}", {表示倍率});

.element {
	// 否Retina用スプライトシートの画像を表示する（等倍表示）
	@include sprite("sample-down");
}

.element2x {
	// Retina用スプライトシートの画像を表示する（0.5倍表示）
	@include sprite("sample2x-down", .5);
}
```

##### Classを使用してスプライト画像を表示する

```html
<!-- m-sprite_{スプライトシートディレクトリ名}-{スプライト画像ファイル名} -->

<!-- 否Retina用スプライトシートの画像を表示する（等倍表示） -->
<span class="m-sprite_sample-down"></span>

<!-- Retina用スプライトシートの画像を表示する（0.5倍表示） -->
<span class="m-sprite_sample2x-down"></span>
```

## 主要ファイル構成

```sh
┣ dest/ # 公開用データディレクトリ。
┣ docs/
┃  ┗ sass/ # 組込済Sassファイルについてのドキュメントディレクトリ。
┣ mock/ # モックサーバの設定ディレクトリ。
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
┃  ┃  ┗ vendors/ # ライブラリなど第三者制作のJSはここに保存します。
┃  ┃      ┗ libs.js # 各Bowerパッケージのmainファイルは、このファイルとして統合して出力されます。
┃  ┗ index.ejs
┗ gulpconfig.js # Website Coding Kitの動作設定ファイル。
```

**Gitリポジトリで空のディレクトリを保持するため、`.gitkeep`ファイルだけが入っているディレクトリがあります。  
何らかのファイルをこのディレクトリに追加した場合は、`.gitkeep`ファイルを削除してください。**

## ドキュメント

### SassDoc

Website Coding Kitに組込済Sassファイルの仕様については、`/docs/sass/index.html`を確認してください。

### FLOCSS

Website Coding Kitに組込済のSassファイル構成は、FLOCSSベースのCSS設計ガイドラインに準拠しています。
