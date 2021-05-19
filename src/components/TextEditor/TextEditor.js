import PropTypes from "prop-types";
import { memo, useCallback } from "react";
import { debounce, makeStyles } from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";

const useStyles = makeStyles(() => ({
  ckeditorWrapper: {
    "& .ck-editor__editable": {
      minHeight: "300px",
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
      <MDEditor value={value} onChange={saveData} />
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
