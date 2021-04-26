import { Grid, makeStyles } from "@material-ui/core";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import HelpMenu from "./HelpMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    right: "0",
    top: "0",
    paddingTop: "16px !important",
    paddingBottom: "16px !important",
    display: "flex",
    justifyContent: "flex-end",
  },
  menu: {
    marginRight: theme.spacing(1),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Grid item sm={12} className={classes.root}>
      <HelpMenu className={classes.menu} />
      <ProfileAvatar />
    </Grid>
  );
}

export default Navbar;
