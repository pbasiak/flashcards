import React from "react";
import PropTypes from "prop-types";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

function PageTemplate({ children, className }) {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <div className={className || "page-template"}>{children}</div>
      </Container>
    </div>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PageTemplate.defaultProps = {
  className: '',
};

export default PageTemplate;
