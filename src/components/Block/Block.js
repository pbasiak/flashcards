import { Box, Typography } from '@material-ui/core';
import React from 'react';

function Block({children, renderTitle}) {
    
    return (
        <Box mb={5}>
            <Box mb={2}>
                <Typography variant="h5">{renderTitle}</Typography>
            </Box>
            <div>{children}</div>
        </Box>
    );
}

export default Block;
