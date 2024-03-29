import { Box, makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "uppercase",
    color: "#718190",
    fontSize: "16px",
    fontWeight: "300",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function Block({ children, renderTitle }) {
  const classes = useStyles();

  return (
    <Box mb={5}>
      <Typography variant="h6" className={classes.title}>
        {renderTitle}
      </Typography>
      <div>{children}</div>
    </Box>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  renderTitle: PropTypes.string.isRequired,
};

export default Block;
