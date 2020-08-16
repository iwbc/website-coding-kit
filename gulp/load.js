'use strict'

const loader = require('gulp-load-plugins')
const browser = require('browser-sync').create()

/**
 * プラグインの読込
 */

let $ = loader()
$.browser = browser
module.exports = $
