import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as LaptopIcon } from "./assets/logo.svg";
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
    width: "100px",
    marginBottom: theme.spacing(1),
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <Link to={ROUTES.Home.path} className={classes.link}>
        <LaptopIcon className={classes.logo} />

        <Typography variant="h5">
          Dev<strong className={classes.logoTextStrong}>FlashCards</strong>
        </Typography>
      </Link>
    </Box>
  );
}

export default Logo;
