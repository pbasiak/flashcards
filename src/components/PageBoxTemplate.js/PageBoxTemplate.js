import React from 'react';
import PropTypes from 'prop-types';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
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

PageBoxTemplate.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PageBoxTemplate;
