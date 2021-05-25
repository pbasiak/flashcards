import { Box, Button, IconButton, makeStyles } from "@material-ui/core";
import React, { useCallback } from "react";
import ROUTES from "../../const/routes";
import MenuBlock from "../MenuBlock/MenuBlock";
import TagsBlock from "../TagsBlock/TagsBlock";
import Logo from "../Logo/Logo";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
}));

function Sidebar({ open, setOpen }) {
  const classes = useStyles();

  const handleClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <div className={classes.root}>
      <Box textAlign="right">
        <IconButton onClick={handleClick}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box mb="40px" p="16px">
        <Logo variant="dark" href={ROUTES.Home.path} />
      </Box>
      <MenuBlock />
      <TagsBlock />
    </div>
  );
}

export default Sidebar;
