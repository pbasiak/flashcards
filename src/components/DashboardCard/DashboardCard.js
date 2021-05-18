import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { COLOR_PALETTE } from "../../theme/palette";
import { Skeleton } from "@material-ui/lab";

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
      <CardMedia className={classes.media} title="Contemplative Reptile" />
      <CardContent>
        <Typography gutterBottom component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="h3" component="p" className={classes.content}>
          {isLoadingContent ? <Skeleton /> : content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
