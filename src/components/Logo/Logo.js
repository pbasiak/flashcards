import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as LaptopIcon } from "./assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  logoText: (props) => ({
    display: "inline-flex",
    flexDirection: "column",
    color: props.variant === "light" ? "#FFFFFF" : "#201d1e",
    textDecoration: "none",
    fontSize: "26px",
    transition: "all 0.15s ease",

    "&:hover": {
      color: props.variant === "light" ? "#FFFFFF" : "#201d1e",
      opacity: "0.6",
    },
  }),
  logoTextStrong: {
    //color: theme.palette.primary.main,
  },
  logo: {
    width: "120px",
  },
}));

function Logo({ href, variant }) {
  const classes = useStyles({ href, variant });

  return (
    <Box textAlign="center">
      <Typography>
        <Link to={href} className={classes.logoText}>
          <span><LaptopIcon className={classes.logo} /></span>
          <span>Learn<strong className={classes.logoTextStrong}>Dev</strong></span>
        </Link>
      </Typography>
    </Box>
  );
}

Logo.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.string,
};

Logo.defaultProps = {
  variant: "light",
  href: "/",
};

export default Logo;
