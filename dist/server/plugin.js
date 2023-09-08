var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var plugin_exports = {};
__export(plugin_exports, {
  DumuLexicalFieldPlugin: () => DumuLexicalFieldPlugin,
  default: () => plugin_default
});
module.exports = __toCommonJS(plugin_exports);
var import_server = require("@nocobase/server");
var import_wang_editor_field = require("./wang-editor-field");
class DumuLexicalFieldPlugin extends import_server.Plugin {
  afterAdd() {
  }
  beforeLoad() {
    this.db.registerFieldTypes({
      lexical: import_wang_editor_field.WangEditorField
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DumuLexicalFieldPlugin
});
