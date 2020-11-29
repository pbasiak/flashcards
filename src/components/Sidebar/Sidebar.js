import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import ROUTES from '../../const/routes';
import MenuBlock from '../MenuBlock/MenuBlock';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import TagsBlock from '../TagsBlock/TagsBlock';
import sidebarBg from './sidebar-bg.png';
import Logo from '../Logo/Logo';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#03182C',
        background: `url(${sidebarBg})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        color: '#FFF',
        height: '100%',
        padding: theme.spacing(0),
        paddingTop: theme.spacing(4),
    },
    
}));


function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box mb="40px" p="16px" textAlign="center">
                <Logo href={ROUTES.Home.path} />
            </Box>
            <ProfileMenu />
            <MenuBlock />
            <TagsBlock />
        </div>
    );
}

export default Sidebar;
