'use strict';

var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman-generator'),
    scriptBase = require('../script-base'),
    backboneUtils = require('../util.js'),
    _ = require('lodash');

var Generator = module.exports = function Generator() {
    yeoman.generators.NamedBase.apply(this, arguments);
    scriptBase.apply(this, arguments);
    this.sourceRoot(path.join(__dirname, '../templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase, scriptBase);

Generator.prototype.createViewFiles = function createViewFiles() {
    this.lastName = _.last(this.name.split('/'));
    this.dirPath = (typeof this.arguments[1] !== 'undefined') ? '/' + this.arguments[1] : '';
    this.jstPath = backboneUtils.rootPath() + 'template' + this.dirPath + '/' + this.name + '.html';

    this.template('js/view.html', this.jstPath);
    this.copy('js/yuna.js', backboneUtils.rootPath() + 'view' + this.dirPath + '/' + this.name + '.js');
    this.copy('js/yuna-view-model.js', backboneUtils.rootPath() + 'view/view_model' + this.dirPath + '/' + this.name + '.js');
};
