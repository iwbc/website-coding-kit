'use strict';

const requireDir  = require('require-dir');
const runSequence = require('run-sequence');
const gulp        = require('gulp');
requireDir('./gulp/tasks', { recursive: true });