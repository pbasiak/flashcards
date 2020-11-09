import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    title: {
        textTransform: 'uppercase',
        color: '#718190',
        fontSize: '16px',
        fontWeight: '300',
    }
}));

function Block({ children, renderTitle }) {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Typography variant="h6" className={classes.title}>{renderTitle}</Typography>
            <div>{children}</div>
        </Box>
    );
}

export default Block;
