import { CollectionFieldInterface, interfacesProperties } from '@nocobase/client';

export class WangEditorInterface extends CollectionFieldInterface {
  name = 'WangEditor';
  type = 'object';
  group = 'media';
  title = 'WangEditor富文本';
  description = 'WangEditor富文本字段';
  default = {
    interface: 'WangEditor',
    type: 'text',
    uiSchema: {
      type: 'string',
      'x-component': 'WangEditor',
      'x-component-props': {},
    },
  };
  availableTypes = ['text'];
  hasDefaultValue = true;
  properties = {
    ...interfacesProperties.defaultProps,
  };
}
