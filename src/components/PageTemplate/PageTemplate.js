import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    }
}));

function PageTemplate({ children, className }) {
    const classes = useStyles();

    return (
        <div className>
            <Container className={classes.root}>
                <div className={className || ''}>
                    {children}
                </div>
            </Container>
        </div>
    );
}

export default PageTemplate;
