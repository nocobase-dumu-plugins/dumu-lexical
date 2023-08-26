import { InstallOptions, Plugin } from '@nocobase/server';
import { WangEditorField } from './wang-editor-field';

export class DumuLexicalFieldPlugin extends Plugin {
  afterAdd() {}

  beforeLoad() {
    this.db.registerFieldTypes({
      lexical: WangEditorField,
    });
  }

  async load() {}

  async install(options?: InstallOptions) {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default DumuLexicalFieldPlugin;
