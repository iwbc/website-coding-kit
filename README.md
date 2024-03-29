# Website Coding Kit

## 動作要件

Website Coding Kitの実行には以下のツールが必要です。  
実行環境にインストールされていない場合は、各ツールのWebサイトからインストールしてください。

- [Node.js](https://nodejs.org/ja/) v10.x - 12.x `必須`
- [Yarn](https://yarnpkg.com/) v1.13 - `必須`
- [Gulp](http://gulpjs.com/) v4.0

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

- SVGスプライトシートの生成
- EJS/SCSS/JSのコンパイル
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

### EJS

#### 環境変数

| 変数名          | 説明                              | 
| --------------- | --------------------------------- | 
| __env           | build実行時の--envオプションの値  | 
| __file.path     | パス                              | 
| __file.dirname  | ディレクトリパス                  | 
| __file.name     | ファイル名                        | 
| __file.basename | 拡張子を除いたファイル名          | 
| __file.extname  | 拡張子                            | 
| __src           | srcディレクトリへの相対パス       | 

#### PHPで出力する

拡張子を`.ejs.php`とする。

##### 例

`index.ejs.php` → `index.php`

### SVGスプライトシートの生成

`/src/assets/sprites`直下のディレクトリごとに、スプライトシートを出力します。

##### 例

`/src/assets/sprites`ディレクトリに`sample`ディレクトリを作成し、この中に`down.svg`と`up.svg`を入れた場合は、`/public/assets/images/sprites`ディレクトリに`sample.svg`というSVGスプライトシートファイルが出力されます。

###### SVGスプライト画像を表示する

```html
<!-- <title>は省略可 -->
<!-- <use :xlink:href="{スプライトシートのファイルパス}#{スプライト画像名}" /> -->

<svg>
  <title>Image title</title>
  <use xlink:href="/public/assets/images/sprites/sample.svg#down" />
</svg>
```

- IE11は、use要素によるSVGの表示に対応していないため、[svg4everybody](https://github.com/jonathantneal/svg4everybody)が別途必要です。

## 主要ファイル構成

```sh
┣ docs/
┃  ┗ scss/ # 組込済SCSSファイルについてのドキュメントディレクトリ。
┣ public/ # 公開用データディレクトリ。
┣ src/ # ソースデータディレクトリ。
┃  ┣ assets/
┃  ┃  ┣ images/
┃  ┃  ┣ js/
┃  ┃  ┣ scss/ # 以下、FLOCSSベースのCSS設計ガイドラインに準拠しています。
┃  ┃  ┃  ┣ foundations/
┃  ┃  ┃  ┣ layouts/
┃  ┃  ┃  ┣ objects/
┃  ┃  ┃  ┣ vendors/ # ライブラリなど第三者制作のスタイルはここに保存します。
┃  ┃  ┃  ┗ style.scss
┃  ┃  ┣ sprites/ # SVGスプライトシートの元ファイル。
┃  ┃  ┃  ┗ {任意のディレクトリ名} # グループごとにディレクトリする。
┃  ┃  ┗ vendors/ # ライブラリなど第三者制作のJSはここに保存します。
┃  ┗ index.ejs
┗ gulp.config.js # Website Coding Kitの動作設定ファイル。
```

**Gitリポジトリで空のディレクトリを保持するため、`.gitkeep`ファイルだけが入っているディレクトリがあります。  
何らかのファイルをこのディレクトリに追加した場合は、`.gitkeep`ファイルを削除してください。**

## ドキュメント

### SCSS

Website Coding Kitに組込済SCSSファイルの仕様については、`/docs/scss/index.html`を確認してください。

### FLOCSS

Website Coding Kitに組込済のSCSSファイル構成は、[FLOCSSベースのCSS設計ガイドライン](https://github.com/iwbc/guide-css-design)に準拠しています。
