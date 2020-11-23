import { makeStyles, MenuList } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    menuList: {
        
    }
}));

function SidebarList({children}) {
    const classes = useStyles();

    return (
        <MenuList className={classes.menuList}>
            {children}
        </MenuList>
    );
}

export default SidebarList;
