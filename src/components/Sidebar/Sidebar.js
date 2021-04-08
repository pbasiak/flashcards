import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import ROUTES from "../../const/routes";
import MenuBlock from "../MenuBlock/MenuBlock";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import TagsBlock from "../TagsBlock/TagsBlock";
import sidebarBg from "./sidebar-bg.png";
import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mb="40px" p="16px">
        <Logo variant="dark" href={ROUTES.Home.path} />
      </Box>
      <ProfileMenu />
      <MenuBlock />
      <TagsBlock />
    </div>
  );
}

export default Sidebar;
