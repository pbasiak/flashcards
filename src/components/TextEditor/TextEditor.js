import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { memo, useCallback } from "react";
import { debounce, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  ckeditorWrapper: {
    '& .ck-editor__editable': {
      minHeight: '300px',
    },
  },
}));

function TextEditor({ handleChange, value }) {
  const classes = useStyles();
  const saveData = useCallback(
    debounce((value) => {
      console.log(value);
      handleChange("content", value);
    }, 1000),
    []
  );

  return (
    <div className={classes.ckeditorWrapper}>
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
    </div>
  );
}

TextEditor.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextEditor.defaultProps = {
  value: "",
};

export default memo(TextEditor);
