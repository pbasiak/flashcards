import { Box, Grid, IconButton, makeStyles } from "@material-ui/core";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import HelpMenu from "./HelpMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "8px !important",
    paddingBottom: "8px !important",
    display: "flex",
    justifyContent: "space-between",
  },
  menu: {
    marginRight: theme.spacing(1),
  },
  menuLeft: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar({ onButtonClick, open, actionArea }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Box display="flex" alignItems="center">
        <IconButton
          disabled={open}
          className={classes.menuLeft}
          onClick={onButtonClick}
        >
          <MenuOpenIcon />
        </IconButton>
        {actionArea}
      </Box>
      <Box display="flex">
        <HelpMenu className={classes.menu} />
        <ProfileAvatar />
      </Box>
    </Grid>
  );
}

export default Navbar;
