'use strict';

const config = require('../gulpconfig.js');

module.exports = {
	app  : function(path) {
		return config.paths.app + '/' + path;
	},
	dist : function(path) {
		return config.paths.dist + '/' + path;
	}
}