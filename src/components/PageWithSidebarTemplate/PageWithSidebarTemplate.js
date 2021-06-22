import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Container,
  Drawer,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import DotGrid from "./assets/dot-grid.png";
import Navbar from "../Navbar/Navbar";
import ReactDOMServer from "react-dom/server";
import clsx from "clsx";
import { useSidebar } from "../../hooks/useSidebar";

const drawerWidth = 260;

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
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    height: "auto",
    minHeight: "100%",
  },
  drawerSmall: {
    position: "fixed",
    width: "100%",
  },
  content: (isLoading) => ({
    margin: "0",
    position: "relative",
    background: "rgba(250,250,250,0.3)",
    justifyContent: isLoading ? "center" : "flex-start",
    alignItems: isLoading ? "center" : "flex-start",
    alignContent: isLoading ? "center" : "flex-start",
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  }),
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "0 !important",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    wordBreak: "break-word",
  },
  subTitle: {
    paddingTop: "0 !important",
    wordBreak: "break-word",
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
  isLoading,
  actionArea,
}) {
  const classes = useStyles(isLoading);
  const { open, setOpen } = useSidebar();
  const parser = new DOMParser();
  const titleString = ReactDOMServer.renderToStaticMarkup(title);
  const parsedTitle = parser.parseFromString(titleString, "text/html");
  document.title = parsedTitle?.documentElement?.textContent
    ? `${parsedTitle.documentElement.textContent} - DevFlashCards`
    : "DevFlashCards";

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Container maxWidth={false} disableGutters={true} className={classes.root}>
      <Grid container spacing={0}>
        <Hidden xsDown implementation="js">
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Sidebar open={open} setOpen={setOpen} />
          </Drawer>
        </Hidden>
        <Hidden smUp implementation="js">
          <Drawer
            variant="temporary"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerSmall,
            }}
          >
            <Sidebar open={open} setOpen={setOpen} />
          </Drawer>
        </Hidden>
        <Grid
          item
          container
          xs
          spacing={10}
          className={clsx(classes.content, {
            [classes.contentShift]: !open,
          })}
        >
          {isLoading ? (
            <CircularProgress size={72} />
          ) : (
            <>
              <Navbar
                onButtonClick={handleClick}
                open={open}
                actionArea={actionArea}
              />
              {title && (
                <Grid item xs={12} className={classes.title}>
                  <Typography variant="h1" className={classes.title}>
                    {title}
                  </Typography>
                </Grid>
              )}
              {breadcrumb && (
                <Grid item xs={12} className={classes.subTitle}>
                  {breadcrumb}
                </Grid>
              )}
              <Grid item xs={12} className={classes.children}>
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
  isLoading: PropTypes.bool,
};

PageWithSidebarTemplate.defaultProps = {
  isLoading: false,
  title: "",
  subTitle: "",
};

export default PageWithSidebarTemplate;
