import { Avatar, Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useUser } from "../../hooks/useUser";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

function ProfileAvatar() {
  const classes = useStyles();
  const { username } = useUser();

  const getInitials = username
    .split("")
    .map((letter, index) => {
      if (index < 2) {
        return letter;
      }
      return null;
    })
    .filter((item) => item != null)
    .join("")
    .toUpperCase();

  const ProfileTitle = () => (
    <Box display="flex" alignItems="center">
      <Avatar className={classes.avatar}>{getInitials}</Avatar>
    </Box>
  );

  return (
    <>
      <ProfileTitle />
    </>
  );
}

export default ProfileAvatar;
