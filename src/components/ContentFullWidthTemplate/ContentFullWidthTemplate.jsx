import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: `-${theme.spacing(4)}px`,
  },
  header: {},
  content: {
    backgroundColor: "#FFF",
    padding: theme.spacing(2),
    border: "1px solid #d4dadc",
    borderRadius: "8px",
  },
}));

function ContentFullWidthTemplate({ children, header }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {header && <div className={classes.header}>{header}</div>}
      <div className={classes.content}>{children}</div>
    </div>
  );
}

ContentFullWidthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentFullWidthTemplate;
