import { DataTypes, Field } from '@nocobase/database';

export class WangEditorField extends Field {
  get dataType() {
    return DataTypes.TEXT;
  }
}
