import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Moment from 'react-moment';
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
}));

function FlashCard({
  className,
  headerLeft,
  headerRight,
  author,
  updatedAt,
  children,
  onClick,
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
          <Grid item alignItems="center">
            {headerLeft}
          </Grid>
          <Grid item justify="flex-end" display="flex">
            {headerRight}
          </Grid>
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
              <Typography variant="body2">pbasiak</Typography>
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
        </Grid>
      </Box>
    </Grid>
  );
}

FlashCard.propTypes = {
  className: PropTypes.string,
  headerLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  headerRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  children: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

FlashCard.defaultProps = {
  className: null,
};

export default FlashCard;
