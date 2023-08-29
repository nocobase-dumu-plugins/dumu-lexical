import React, { useEffect, useState } from 'react';
import {
  CollectionManagerProvider,
  ReadPretty,
  SchemaComponentOptions,
  registerField,
  useAPIClient,
} from '@nocobase/client';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';

import '@wangeditor/editor/dist/css/style.css';
import { WangEditor } from './wangeditor-formula';

const WangEditorCom = connect(
  (props) => {
    const { value, onChange, disabled } = props;
    if (disabled) {
      return <ReadPretty.Html {...props} />;
    }
    const [editor, setEditor] = useState(null);
    const toolbarConfig= {};
    const api = useAPIClient();
    const customUpload = async (file, insertFn) => {
      const data = new FormData();
      data.append('file', file);
      const r = await api.request({
        url: 'attachments:create',
        method: 'post',
        data,
      });
      insertFn(r.data.data.url);
    };
    const editorConfig = {
      placeholder: '请输入内容...',
      MENU_CONF: {
        uploadImage: {
          customUpload,
        },
        uploadVideo: {
          customUpload,
        },
      },
    };

    useEffect(() => {
      return () => {
        if (editor == null) return;
        editor.destroy();
        setEditor(null);
      };
    }, [editor]);
    let canSave = false;
    // 编辑时防止清空默认值
    setTimeout(() => {
      canSave = true;
    }, 800);
    const myChange = (editor) => {
      const html = editor.getHtml();
      canSave && onChange(html);
    };
    return (
      <>
        <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
          <Toolbar
            editor={editor}
            defaultConfig={toolbarConfig}
            mode="default"
            style={{ borderBottom: '1px solid #ccc' }}
          />
          <Editor
            defaultConfig={editorConfig}
            value={value}
            onCreated={setEditor}
            onChange={myChange}
            mode="default"
            style={{ height: '500px', overflowY: 'hidden' }}
          />
        </div>
      </>
    );
  },
  mapProps((props) => {
    const { value } = props;
    return {
      ...props,
      value: typeof value === 'object' ? value?.default : value,
    };
  }),
  mapReadPretty((props) => {
    return <ReadPretty.Html {...props} />;
  }),
);

registerField(WangEditor.group, WangEditor.type, WangEditor);
export const WangEditorProvider = (props) => {
  return (
    <CollectionManagerProvider interfaces={{ WangEditor }}>
      <SchemaComponentOptions
        components={{
          WangEditor: WangEditorCom,
        }}
      >
        {props.children}
      </SchemaComponentOptions>
    </CollectionManagerProvider>
  );
};

WangEditorProvider.displayName = 'WangEditorProvider';
