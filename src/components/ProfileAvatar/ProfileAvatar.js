import { Avatar, Box, makeStyles, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { MenuProps } from "../../const/menuSelect";
import ROUTES from "../../const/routes";
import { useUser } from "../../hooks/useUser";
import { COLOR_PALETTE } from "../../theme/palette";
import { getInitials } from "./utils";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: COLOR_PALETTE.PRIMARY.MAIN,
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
      opacity: "0.8",
    }
  },
}));

function ProfileAvatar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const {
    user: { username },
  } = useUser();

  const handleLogout = () => {
    history.push(ROUTES.Logout.path);
  };

  return (
    <Box display="flex" alignItems="center">
      <Avatar
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.avatar}
      >
        {getInitials(username)}
      </Avatar>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...MenuProps}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileAvatar;
