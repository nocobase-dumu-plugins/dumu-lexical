import { Plugin } from '@nocobase/client';
import { WangEditorProvider } from './WangEditorProvider';

export class DumuWangEditorFieldPlugin extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.app.use(WangEditorProvider);
  }
}

export default DumuWangEditorFieldPlugin;
