import React from "react";
import PropTypes from "prop-types";
import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Typography,
  Link
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Sidebar from "../Sidebar/Sidebar";
import { noop } from "lodash";
import DotGrid from "./assets/dot-grid.png";
import Navbar from "../Navbar/Navbar";
import { Link as RouterLink } from "react-router-dom";
import ROUTES from "../../const/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${DotGrid})`,
    display: "flex",
    position: "relative",
  },
  sidebarContainer: {
    maxWidth: "260px",
    backgroundColor: "rgba(255,255,255, 0.8)",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.05)",
  },
  contentContainer: (isLoading) => ({
    margin: "0",
    position: "relative",
    background: "rgba(250,250,250,0.3)", // "radial-gradient(left 15% top 10%, #FFFFFF, #D4E0EA)"
    justifyContent: isLoading ? "center" : "flex-start",
    alignItems: isLoading ? "center" : "flex-start",
    alignContent: isLoading ? "center" : "flex-start",
  }),
  title: {
    fontSize: "36px",
    fontWeight: "700",
  },
  subTitle: {
    paddingTop: "0 !important",
  },
  navigation: {
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 0`,
    flex: "1",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  children: {
    paddingTop: "0 !important",
  },
}));

function PageWithSidebarTemplate({
  children,
  title,
  breadcrumb,
  navigation: { isVisible, onBackClick, onEditClick } = {},
  isLoading,
}) {
  const classes = useStyles(isLoading);

  return (
    <Container maxWidth={false} disableGutters={true} className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs className={classes.sidebarContainer}>
          <Sidebar />
        </Grid>
        <Grid
          item
          container
          xs
          spacing={8}
          className={classes.contentContainer}
        >
          {isLoading ? (
            <CircularProgress size={72} />
          ) : (
            <>
              <Navbar />
              {isVisible && (
                <div className={classes.navigation}>
                  <Button
                    startIcon={<ArrowBackIcon />}
                    className={classes.backButton}
                    variant="outlined"
                    size="small"
                    onClick={onBackClick}
                  >
                    Back to list
                  </Button>
                  <Button variant="outlined" size="small" onClick={onEditClick}>
                    Edit
                  </Button>
                </div>
              )}
              {title && (
                <Grid item sm={12} className={classes.title}>
                  <Typography variant="h1" className={classes.title}>
                    {title}
                  </Typography>
                </Grid>
              )}
              {breadcrumb && (
                <Grid item sm={12} className={classes.subTitle}>
                  {breadcrumb}
                </Grid>
              )}
              <Grid item sm={12} className={classes.children}>
                {children}
              </Grid>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

PageWithSidebarTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  navigation: PropTypes.shape({
    isVisible: PropTypes.bool,
    onBackClick: PropTypes.func,
    onEditClick: PropTypes.func,
  }),
  isLoading: PropTypes.bool,
};

PageWithSidebarTemplate.defaultProps = {
  navigation: {
    isVisible: false,
    onBackClick: noop,
    onEditClick: noop,
  },
  isLoading: false,
  title: "",
  subTitle: "",
};

export default PageWithSidebarTemplate;
