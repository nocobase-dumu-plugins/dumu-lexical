'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var server = require('@nocobase/server');
var wangEditorField = require('./wang-editor-field');

class DumuLexicalFieldPlugin extends server.Plugin {
  afterAdd() {
  }
  beforeLoad() {
    this.db.registerFieldTypes({
      lexical: wangEditorField.WangEditorField
    });
  }
  async load() {
  }
  async install(options) {
  }
  async afterEnable() {
  }
  async afterDisable() {
  }
  async remove() {
  }
}
var plugin_default = DumuLexicalFieldPlugin;

exports.DumuLexicalFieldPlugin = DumuLexicalFieldPlugin;
exports.default = plugin_default;
