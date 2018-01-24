'use strict';

const requireDir  = require('require-dir');
requireDir('./gulp/tasks', { recursive: true });
global.projectPath = __dirname;
