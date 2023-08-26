import { IField, interfacesProperties } from '@nocobase/client';

const { defaultProps } = interfacesProperties;
export const WangEditor: IField = {
  name: 'WangEditor',
  type: 'object',
  group: 'media',
  title: 'WangEditor富文本',
  description: 'WangEditor富文本字段',
  default: {
    interface: 'WangEditor',
    type: 'text',
    uiSchema: {
      type: 'string',
      'x-component': 'WangEditor',
    },
  },
  availableTypes: ['text'],
  hasDefaultValue: true,
  properties: {
    ...defaultProps,
  },
};
