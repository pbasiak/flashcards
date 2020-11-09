import { Box } from '@material-ui/core';
import React from 'react';

function MenuItemIcon({children}) {
    
    return (
        <Box mr="8px" alignItems="center" display="flex">
            {children}
        </Box>
    );
}

export default MenuItemIcon;
