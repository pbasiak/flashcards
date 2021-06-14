import { makeStyles } from "@material-ui/core";
import BackgroundVideoFile from "./home-background.mp4";

const useStyles = makeStyles(() => ({
  root: {
      position: "absolute",
      zIndex: "-1",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      filter: "grayscale(50%) contrast(1.5) brightness(1.5)",
  },
  video: {
      height: "100%",
      objectFit: "cover",
  },
}));

function BackgroundVideo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.video}>
        <source src={BackgroundVideoFile} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackgroundVideo;
