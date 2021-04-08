import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { memo, useCallback } from "react";
import { debounce } from "@material-ui/core";

function TextEditor({ handleChange, value }) {
  const saveData = useCallback(
    debounce((value) => {
      handleChange("content", value);
    }, 1000),
    []
  );

  if (!value || !handleChange) {
    return "Loading Editor";
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onReady={(editor) => {
        console.log(editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        saveData(data);
      }}
    />
  );
}

export default memo(TextEditor);
