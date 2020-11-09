import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MenuBlock from '../MenuBlock/MenuBlock';
import ProfileBlock from '../ProfileBlock/ProfileBlock';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import TagsBlock from '../TagsBlock/TagsBlock';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#092641',
        color: '#FFF',
        height: '100%',
        padding: '40px',
    }
}));


function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box mb="40px">
                <Typography variant="h4">
                    Learn<strong>Dev</strong>
                </Typography>
            </Box>
            <ProfileMenu />
            <MenuBlock />
            <TagsBlock />
        </div>
    );
}

export default Sidebar;
