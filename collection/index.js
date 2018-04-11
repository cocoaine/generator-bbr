'use strict';

var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman-generator'),
    scriptBase = require('../script-base'),
    backboneUtils = require('../util.js');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);
  scriptBase.apply(this, arguments);
  this.sourceRoot(path.join(__dirname, '../templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase, scriptBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  this.dirPath = (typeof this.arguments[1] !== 'undefined') ? '/' + this.arguments[1] : '';
  this.pathToModel = (typeof this.arguments[2] !== 'undefined') ? this.arguments[2] + '/' : '';

  this.copy('js/collection.js', backboneUtils.rootPath() + 'collection' + this.dirPath + '/' + this.name + '.js');
};