import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import contentBg from '../PageWithSidebarTemplate/content-bg.png';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `url(${contentBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
    }
}));


function PageBoxTemplate({ children }) {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.container}>
            {children}
        </Container>
    );
}

export default PageBoxTemplate;
