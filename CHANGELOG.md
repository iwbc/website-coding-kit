# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.1.1](https://github.com/iwbc/website-coding-kit/compare/3.1.0...3.1.1) (2020-09-02)


### Bug Fixes

* Lintエラー修正 ([4444d7d](https://github.com/iwbc/website-coding-kit/commit/4444d7d0033ba5edf0bd7343ba7dfe7615b948f7))

## [3.1.0](https://github.com/iwbc/website-coding-kit/compare/3.0.3...3.1.0) (2020-08-16)


### Features

* node-sassをdart-sassに変更 ([6b10307](https://github.com/iwbc/website-coding-kit/commit/6b103078ac0cf0f297e27965b5b69d0303f6163c))
* sassのgrid mixinを削除（廃止） ([49bffa2](https://github.com/iwbc/website-coding-kit/commit/49bffa286f32c5e597479e42aab0844a6b4eacbf))
* sassのgrid mixinを削除（廃止） ([e2cda08](https://github.com/iwbc/website-coding-kit/commit/e2cda08102c6bf66362e9d2800e104f9bba391c2))
* サポートするnodeバージョンを10.x-12.xに変更 ([54ce538](https://github.com/iwbc/website-coding-kit/commit/54ce538fa7d590066596d029782c0d2119a6b303))

### [3.0.3](https://github.com/iwbc/website-coding-kit/compare/3.0.2...3.0.3) (2020-05-14)


### Bug Fixes

* caniuse-liteモジュールを更新 ([0732b20](https://github.com/iwbc/website-coding-kit/commit/0732b202b6c635760bf89b2d392572a293271dea))

### [3.0.2](https://github.com/iwbc/website-coding-kit/compare/3.0.1...3.0.2) (2020-02-20)


### Feature Updates

* **ejs:**  ejs.data.jsに記述したパラメータをejsの変数として使用できるよう改修 ([ebf2803](https://github.com/iwbc/website-coding-kit/commit/ebf280341eeafddd3aadc24c790e391a59cd70bc))

### [3.0.1](https://github.com/iwbc/website-coding-kit/compare/3.0.0...3.0.1) (2020-02-11)


### Feature Updates

* メディアクエリの各ミックスインの印刷対応と任意のメディアタイプで出力できるよう第2引数を追加 ([803b178](https://github.com/iwbc/website-coding-kit/commit/803b17816df0a4eed4c768a0c7cdb9734c40b6b4))
* 設定のoptimizeImagesに配列で指定することで、指定した拡張子の画像のみを最適化処理の対象とすることができるよう改修 ([1d44858](https://github.com/iwbc/website-coding-kit/commit/1d4485815c9c82e9521607d08e58dec790002164))

## [3.0.0](https://github.com/iwbc/website-coding-kit/compare/3.0.0-alpha.2...3.0.0) (2020-01-13)


### Features

* **scss:** mq-res Mixin（media min-resolution）を追加 ([a9bcb88](https://github.com/iwbc/website-coding-kit/commit/a9bcb8860bb6b3fc191f075e9ad65c50a2a5e860))


### Feature Updates

* CSSのlinterをsass-lintからstylelintに変更 ([85c0300](https://github.com/iwbc/website-coding-kit/commit/85c0300660735c7cb99c73eab67c8b4bdef07a9f))

## [3.0.0-alpha.2](https://github.com/iwbc/website-coding-kit/compare/3.0.0-alpha.1...3.0.0-alpha.2) (2019-11-26)


### Features

* **release:** standard-versionをローカルインストール ([d7fdae6](https://github.com/iwbc/website-coding-kit/commit/d7fdae622cbdba694a9e104d55092bcc0393ec17))


### Bug Fixes

* **gulp:** gulp-pleeeaseをgulp-postcssに変更 ([bb2c22d](https://github.com/iwbc/website-coding-kit/commit/bb2c22d757fa2b8c7f61ab12482be4bb64d8d7b6))

<a name="3.0.0-alpha.1"></a>
# [3.0.0-alpha.1](https://github.com/iwbc/website-coding-kit/compare/3.0.0-alpha.0...3.0.0-alpha.1) (2019-04-22)


### Bug Fixes

* **image:** 画像ファイルの更新監視中に新しく画像を追加したとき、正しく処理されない不具合を修正 ([77fe65d](https://github.com/iwbc/website-coding-kit/commit/77fe65d))
* **webpack:** cssファイルをimportできない不具合を修正 ([c508a85](https://github.com/iwbc/website-coding-kit/commit/c508a85))



<a name="3.0.0-alpha.0"></a>
# [3.0.0-alpha.0](https://github.com/iwbc/website-coding-kit/compare/2.9.0...3.0.0-alpha.0) (2019-02-08)


### Bug Fixes

* **gulp:** SVG画像が正しく最適化されないことがある問題に対処 ([f35f97b](https://github.com/iwbc/website-coding-kit/commit/f35f97b))


### build

* babel-loaderとwebpack以外を最新バージョンにアップデート ([6cac35d](https://github.com/iwbc/website-coding-kit/commit/6cac35d))


### Features

* **sass:** いくつかの基本スタイルを追加 ([c2c05e4](https://github.com/iwbc/website-coding-kit/commit/c2c05e4))


### BREAKING CHANGES

* Node.js v6のサポートを終了し、新たにv10のサポート開始



<a name="2.9.0"></a>
# [2.9.0](https://github.com/iwbc/website-coding-kit/compare/2.8.0...2.9.0) (2018-06-30)


### Bug Fixes

* meta format-detectionをひとつに統合 ([7397f77](https://github.com/iwbc/website-coding-kit/commit/7397f77))


### Features

* **sass:** z-index管理用関数に加減算用引数を追加 ([42a8f23](https://github.com/iwbc/website-coding-kit/commit/42a8f23))



<a name="2.8.0"></a>
# [2.8.0](https://github.com/iwbc/website-coding-kit/compare/2.7.0...2.8.0) (2018-05-04)


### Features

* **sass:** z-index管理用の変数と関数を追加 ([a906644](https://github.com/iwbc/website-coding-kit/commit/a906644))
* **sass): z-index管理用の変数と関数を追加feat(sass:** color関数の関数名をcに変更 ([5121eb2](https://github.com/iwbc/website-coding-kit/commit/5121eb2))



<a name="2.7.0"></a>
# [2.7.0](https://github.com/iwbc/website-coding-kit/compare/2.6.0...2.7.0) (2018-02-27)


### Features

* **gulp:** libs.js/libs.cssの出力先を変更 ([a430aa7](https://github.com/iwbc/website-coding-kit/commit/a430aa7))
* **gulp:** 画像最適化の有無効設定をbuild設定側に移動 ([c5f9346](https://github.com/iwbc/website-coding-kit/commit/c5f9346))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/iwbc/website-coding-kit/compare/2.5.0...2.6.0) (2018-02-26)


### Features

* **sass:** Noto Sans CJK JPの機能を廃止 ([ed49019](https://github.com/iwbc/website-coding-kit/commit/ed49019))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/iwbc/website-coding-kit/compare/2.4.1...2.5.0) (2018-02-06)


### Features

* **ejs:** EJSの環境変数を追加および変更 ([1e2c067](https://github.com/iwbc/website-coding-kit/commit/1e2c067))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/iwbc/website-coding-kit/compare/2.4.0...2.4.1) (2018-01-31)


### Bug Fixes

* **gulp:** cleanタスクでGit関連ファイルを除外するよう修正 ([a4b2842](https://github.com/iwbc/website-coding-kit/commit/a4b2842))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/iwbc/website-coding-kit/compare/2.3.1...2.4.0) (2018-01-29)


### Bug Fixes

* **sass:** :rootのfont-sizeにvwを使用しないよう修正 ([5f18265](https://github.com/iwbc/website-coding-kit/commit/5f18265))


### Features

* **gulp:** EJSに環境変数(__path)を追加 ([be58841](https://github.com/iwbc/website-coding-kit/commit/be58841))



<a name="2.3.1"></a>
## [2.3.1](https://github.com/iwbc/website-coding-kit/compare/2.3.0...2.3.1) (2018-01-22)


### Bug Fixes

* **scss:** button要素の初期スタイルを設定 ([53e2a05](https://github.com/iwbc/website-coding-kit/commit/53e2a05))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/iwbc/website-coding-kit/compare/2.2.1...2.3.0) (2018-01-19)


### Bug Fixes

* **sass:** テストに失敗する不具合を修正 ([04b18e8](https://github.com/iwbc/website-coding-kit/commit/04b18e8))


### Features

* **sass:** orientationのメディアクエリを出力するミックスイン"mq-ori"を追加 ([ca546a2](https://github.com/iwbc/website-coding-kit/commit/ca546a2))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/iwbc/website-coding-kit/compare/2.2.0...2.2.1) (2018-01-15)



<a name="2.2.0"></a>
# [2.2.0](https://github.com/iwbc/website-coding-kit/compare/2.1.0...2.2.0) (2017-11-30)
