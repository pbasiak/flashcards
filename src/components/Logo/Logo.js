import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as Logotype } from "./assets/logo.svg";
import ROUTES from "../../const/routes";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#201d1e",
    textDecoration: "none",
    fontSize: "26px",
    transition: "all 0.15s ease",

    "&:hover": {
      color: "#201d1e",
      opacity: "0.6",
    },
  },
  logoTextStrong: {
    color: theme.palette.primary.main,
  },
  logo: {
    width: "100%",
    maxWidth: "220px",
    marginBottom: theme.spacing(1),
  },
}));

function Logo({ href }) {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <Link to={href} className={classes.link}>
        <Logotype className={classes.logo} />
      </Link>
    </Box>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
};

Logo.defaultProps = {
  href: ROUTES.Dashboard.path,
};

export default Logo;
