'use strict';

const config = require('./config.js');

module.exports = {
	app  : function(path) {
		return config.paths.app + '/' + path;
	},
	dist : function(path) {
		return config.paths.dist + '/' + path;
	}
}