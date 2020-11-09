import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    pageBox: {
        background: '#fff',
        padding: theme.spacing(4),
        borderRadius: theme.spacing(3),
        marginBottom: theme.spacing(4),
        boxShadow: '4px 4px 8px 0 rgba(0, 0, 0, 0.05)',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));


function PageBoxTemplate({children}) {
    const classes = useStyles();

    return (
        <div>
            <Container fixed maxWidth="xs" className={classes.container}>
                <Box className={classes.pageBox}>
                    {children}
                </Box>
            </Container>
        </div>
    );
}

export default PageBoxTemplate;
