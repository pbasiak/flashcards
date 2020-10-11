import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    pageBox: {
        background: '#f5f5f5',
        padding: '20px',
        marginTop: '50px',
    }
}));


function PageBoxTemplate({children}) {
    const classes = useStyles();

    return (
        <div>
            <Container fixed maxWidth="xs">
                <Box className={classes.pageBox}>
                    {children}
                </Box>
            </Container>
        </div>
    );
}

export default PageBoxTemplate;
