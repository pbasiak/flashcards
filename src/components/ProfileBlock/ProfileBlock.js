import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useUser } from "../../hooks/useUser";
import { getInitials } from "../../utils/getInitials";
import Block from "../Block/Block";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

function ProfileBlock() {
  const classes = useStyles();
  const { username } = useUser();

  const ProfileTitle = () => (
    <Box display="flex" alignItems="center">
      <Avatar className={classes.avatar}>{getInitials(username)}</Avatar>
    </Box>
  );

  return (
    <Block renderTitle={<ProfileTitle />}>
      <Typography>
        <ProfileTitle />
      </Typography>
    </Block>
  );
}

export default ProfileBlock;
