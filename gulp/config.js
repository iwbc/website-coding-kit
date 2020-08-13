'use strict'

const minimist = require('minimist')
let config = require('../gulp.config.js')

/**
 * コマンドの引数から設定の書き換え
 */

const argv = minimist(process.argv.slice(2), {
  string: ['env'],
  default: {
    env: 'development',
  },
})

config.ENV = argv.env
config.build = config.build[config.ENV] || config.build.default
module.exports = config
