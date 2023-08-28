'use strict';

var database = require('@nocobase/database');

class WangEditorField extends database.Field {
  get dataType() {
    return database.DataTypes.TEXT;
  }
}

exports.WangEditorField = WangEditorField;
