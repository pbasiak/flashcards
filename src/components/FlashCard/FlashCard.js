import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { COLOR } from "../../theme/palette";

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
    marginBottom: theme.spacing(2),
    alignContent: "center",
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
}));

function FlashCard({
  className,
  headerLeft,
  headerRight,
  children,
  likesCount,
  commentsCount,
  onClick,
}) {
  const classes = useStyles();
  const isFooterEnabled = false;

  return (
    <Grid item onClick={onClick} xs={12} sm={12} md={6} lg={4} xl={3}>
      <Box className={`${classes.root} ${className}`}>
        <Grid container item className={classes.header}>
          <Grid item sm={9} container alignItems="center">
            {headerLeft}
          </Grid>
          <Grid item container sm={3} justify="flex-end" display="flex">
            {headerRight}
          </Grid>
        </Grid>
        <Grid item container sm={12} className={classes.title}>
          {children}
        </Grid>
        {isFooterEnabled ? (
          <>
            <Grid container item className={classes.footer}>
              <Grid item container sm={6} alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.footerBox}
                >
                  <FavoriteIcon className={classes.icon} />
                  <Typography variant="body2" component="span">
                    {likesCount}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.footerBox}
                >
                  <ChatBubbleIcon className={classes.icon} />
                  <Typography variant="body2" component="span">
                    {commentsCount}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : null}
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
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
};

FlashCard.defaultProps = {
  className: null,
};

export default FlashCard;
