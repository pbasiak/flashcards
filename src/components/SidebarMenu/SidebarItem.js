import { makeStyles, MenuItem } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuItem: {
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        borderRadius: '8px', // TODO: THEME var
        marginBottom: '4px', // TODO: THEME var
    },
    menuItemActive: {
        background: '#E9EDF1', // TODO: THEME var
        color: '#061524', // TODO: THEME var

        '&:hover': {
            background: '#E9EDF1', // TODO: THEME var
            color: '#061524', // TODO: THEME var
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
