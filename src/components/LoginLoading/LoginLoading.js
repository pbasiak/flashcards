import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import PageBoxTemplate from '../PageBoxTemplate.js/PageBoxTemplate';

const useStyles = makeStyles((theme) => ({
    row: {
        marginBottom: theme.spacing(2),
    }
}));

function LoginLoading({ title }) {
    const classes = useStyles();

    return (
        <PageBoxTemplate>
            <Grid container>
                <Grid item container justify="center" className={classes.row}>
                    <Typography variant="h5">Loading {title}...</Typography>
                </Grid>
                <Grid item container justify="center" className={classes.row}>
                    <CircularProgress />
                </Grid>
            </Grid>
        </PageBoxTemplate>
    );
}

LoginLoading.propTypes = {
    title: PropTypes.string.isRequired,
}

export default LoginLoading;
