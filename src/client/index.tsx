import { Plugin } from '@nocobase/client';
import { WangEditorProvider } from './WangEditorProvider';
import { WangEditorInterface } from './interface';

export class DumuWangEditorFieldPlugin extends Plugin {
  async afterAdd() {
  }

  async beforeLoad() {
  }

  async load() {

    this.app.use(WangEditorProvider);
    this.app.dataSourceManager.addFieldInterfaces([WangEditorInterface]);
  }
}

export default DumuWangEditorFieldPlugin;
