## 1.5.1

#### Fix
- Iconfontのnormalizeオプションを有効化
- IconfontのSCSSテンプレートを変更

## 1.5.0

#### New
- SVGからWebフォントの生成機能を追加

#### Update
- sanitize.cssを5.0.0にアップデート

#### Change
- .editorconfigにjsonファイルのルールを追加

## 1.4.0

#### Breaking
- Sassから$base-line-heightを削除し、\_variable.scssへ$line-heightとして追加
- Sassに一本化するため、cssタスクを廃止（sanitize.cssは_sanitize.scssにリネームし、sass/vendorsディレクトリへ移動）
- modernizrタスクのファイル監視による実行を廃止し、yarn run modernizrで手動で行うように変更
- Layoutの子レイヤーを廃止

#### New
- white-space: normal/nowrapのクラスユーティリティを追加
- figureとfigcaptionのデフォルトスタイルを追加
- font-size: smaller/largerユーティリティクラスを追加

#### Fix
- copyタスクで正常にファイルがコピーされないことがある不具合を修正
- NotoSansのサブセットに「・」（中黒）が含まれていなかったのを修正
- NotoSansのフォントファイル名を変更

#### Refactor
- SassDocのユーティリティグループを分割

## 1.3.0

#### General

- Nodeモジュールをアップグレード

#### Gulp

- Modernizrのビルドタスクを追加

#### Sass

- ユーティリティクラスのフォントウェイトを100刻みに変更
- ユーティリティクラスの一部クラス名を変更
- メディアクエリのユーティリティクラスを追加
- サイト固有の変数を記述するためのSassファイル`_variable.scss`をFoundationに追加
- FlexboxグリッドのMixinを追加
- Noto Sans CJK JPフォントの使用設定を追加
- ObjectレイヤーにBlock子レイヤーを追加

## 1.0.0

- 正式版リリース
