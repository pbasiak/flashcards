import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useUser } from '../../hooks/useUser';
import Block from '../Block/Block';

const useStyles = makeStyles((theme) => ({
    avatar: {
        marginRight: theme.spacing(2),
    }
}));

function ProfileBlock() {
    const classes = useStyles();
    const { username } = useUser();

    const getInitials = username.split('').map((letter, index) => {
        if (index < 2) {
            return letter;
        }
        return null;
    }).filter(item => item != null).join('').toUpperCase();

    const ProfileTitle = () => <Box display="flex" alignItems="center"><Avatar  className={classes.avatar}>{getInitials}</Avatar><Typography variant="h6">{username}</Typography></Box>;

    return (
        <Block renderTitle={<ProfileTitle />}>
            <Typography>block content</Typography>
        </Block>
    );
}

export default ProfileBlock;
