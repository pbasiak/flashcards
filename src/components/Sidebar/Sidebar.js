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
        background: '#061524',
        color: '#FFF',
        height: '100%',
        padding: theme.spacing(0),
        paddingTop: theme.spacing(4),
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
            <Box mb="40px" pl="16px">
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
