import { makeStyles, MenuItem } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuItem: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        justifyContent: 'center',
    },
    menuItemActive: {
        background: '#E9EDF1',
        color: '#061524',

        '&:hover': {
            background: '#E9EDF1',
            color: '#061524',
        }
    }
}));

function SidebarItem(props) {
    const { children, to } = props;
    const classes = useStyles();
    const { location } = useHistory();

    const isActive = location.pathname === to;

    return (
        <MenuItem {...props} button className={`${classes.menuItem} ${isActive && classes.menuItemActive}`}>{children}</MenuItem>
    );
}

export default SidebarItem;
