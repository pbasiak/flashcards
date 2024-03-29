import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Moment from "react-moment";
import { COLOR } from "../../theme/palette";
import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: COLOR.BACKGROUND.CARD,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
    alignItems: "flex-start",
    alignContent: "flex-start",
    cursor: "pointer",
    transition: "background 0.2s ease",
    width: "100%",
    height: "100%",
    minHeight: 120,
    position: "relative",
    overflow: "hidden",

    "&:hover": {
      background: COLOR.BACKGROUND.CARD_LIGHT,

      "& h4": {
        transition: "color 0.2s ease",
        color: theme.palette.primary.main,
      },

      "& h5": {
        transition: "color 0.2s ease",
        color: theme.palette.primary.main,
      },
    },
  },
  header: {
    flexGrow: "0",
  },
  title: {
    alignContent: "center",
    flexGrow: 1,
    marginBottom: theme.spacing(1),
  },
  footer: {
    marginTop: "auto",
  },
  footerBox: {
    marginRight: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
    cursor: "pointer",
  },
  footerIcon: {
    marginRight: theme.spacing(1),
  },
  badge: {
    width: "100px",
    height: "50px",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    background: "#FFF",
    transform: "rotate(45deg) translateX(calc(50% - 30px)) translateY(-34px)",
    paddingBottom: "5px",
    opacity: "0.65",
  },
  badgeText: {
    fontSize: "12px",
  }
}));

function FlashCard({
  className,
  headerLeft,
  headerRight,
  author,
  updatedAt,
  children,
  onClick,
  badge
}) {
  const classes = useStyles();

  return (
    <Grid item onClick={onClick} xs={12} sm={12} md={6} lg={4} xl={3}>
      <Box className={`${classes.root} ${className}`}>
        <Grid
          container
          item
          className={classes.header}
          justify="space-between"
          alignItems="center"
        >
          <Box display="flex" alignItems="center">
            {headerLeft}
          </Box>
          {headerRight && (
            <Box item justifyContent="flex-end" display="flex">
              {headerRight}
            </Box>
          )}
        </Grid>
        <Grid item container sm={12} className={classes.title}>
          {children}
        </Grid>
        <Grid
          item
          container
          sm={12}
          alignItems="flex-end"
          justify="space-between"
        >
          {author ? (
            <Box display="flex" alignItems="center">
              <PersonIcon fontSize="small" className={classes.footerIcon} />
              <Typography variant="body2">{author}</Typography>
            </Box>
          ) : null}

          {updatedAt ? (
            <Box display="flex" alignItems="center">
              <CalendarTodayIcon
                fontSize="small"
                className={classes.footerIcon}
              />
              <Typography variant="body2">
                <Moment format="YYYY.MM.DD">{updatedAt}</Moment>
              </Typography>
            </Box>
          ) : null}

          {badge && (
            <div className={classes.badge}>
              <Typography variant="body2" className={classes.badgeText}>{badge}</Typography>
            </div>
          )}
        </Grid>
      </Box>
    </Grid>
  );
}

FlashCard.propTypes = {
  className: PropTypes.string,
  headerLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  headerRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node.isRequired,
  author: PropTypes.string,
  updatedAt: PropTypes.string,
};

FlashCard.defaultProps = {
  className: null,
  author: null,
  updatedAt: null,
  headerRight: null,
};

export default FlashCard;
