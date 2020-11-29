import { Box, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles(theme => ({
    logoType: {
        fontSize: '50px',
        fontWeight: '900',
        color: theme.palette.primary.main,
    },
    logoTypeSlash: props => ({
        color: props.variant === 'light' ? '#FFFFFF' : '#201d1e',
    }),
    logoText: props => ({
        color:  props.variant === 'light' ? '#FFFFFF' : '#201d1e',
        textDecoration: 'none',

        '&:hover': {
            color:  props.variant === 'light' ? '#FFFFFF' : '#201d1e',
        },
    }),
    logoTextStrong: {
        color: theme.palette.primary.main,
    },
}));

function Logo(props) {
    const { href } = props;
    const classes = useStyles(props);

    return (
        <Box textAlign="center">
            <Typography className={classes.logoType}>
                <span>&#60;</span>
                <span className={classes.logoTypeSlash}>/</span>
                <span>&#62;</span>
            </Typography>
            <Typography>
                <Link to={href} className={classes.logoText}>Learn<strong className={classes.logoTextStrong}>Dev</strong></Link>
            </Typography>
        </Box>
    );
}

Logo.defaultProps = {
    variant: 'light',
    href: '/',
}

export default Logo;
