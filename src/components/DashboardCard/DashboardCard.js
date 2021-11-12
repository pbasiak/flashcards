import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { COLOR_PALETTE } from "../../theme/palette";
import { Skeleton } from "@material-ui/lab";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    width: 150,
    flexGrow: 1,
    flexShrink: 0,
  },
  media: {
    height: 20,
    backgroundColor: COLOR_PALETTE.PRIMARY.MAIN,
  },
  title: {
    textAlign: "center",
  },
  content: {
    textAlign: "center",
  },
});

function DashboardCard({ title, content, isLoadingContent }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box className={classes.media} />
      <CardContent>
        {title ? (
          <Typography gutterBottom component="h2" className={classes.title}>
            {title}
          </Typography>
        ) : null}
        <Typography variant="h3" component="p" className={classes.content}>
          {isLoadingContent ? <Skeleton /> : content}
        </Typography>
      </CardContent>
    </Card>
  );
}

DashboardCard.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  isLoadingContent: PropTypes.bool,
};

DashboardCard.defaultProps = {
  title: "",
  content: "",
  isLoadingContent: false,
};

export default DashboardCard;
