import { Box, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import ROUTES from '../../const/routes';
import MenuBlock from '../MenuBlock/MenuBlock';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import TagsBlock from '../TagsBlock/TagsBlock';
import sidebarBg from './sidebar-bg.png';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${sidebarBg})`,
        backgroundSize: 'cover',
        color: '#FFF',
        height: '100%',
        padding: '40px',
    },
    logoText: {
        color: '#FFF',
        textDecoration: 'none',

        '&:hover': {
            color: '#FFF',
        },
    },
}));


function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box mb="40px">
                <Typography variant="h4">
                    <Link to={ROUTES.Home.path} className={classes.logoText}>Learn<strong>Dev</strong></Link>
                </Typography>
            </Box>
            <ProfileMenu />
            <MenuBlock />
            <TagsBlock />
        </div>
    );
}

export default Sidebar;
