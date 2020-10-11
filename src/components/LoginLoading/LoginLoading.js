import { CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PageBoxTemplate from '../PageBoxTemplate.js/PageBoxTemplate';

const useStyles = makeStyles((theme) => ({
    row: {
        marginBottom: theme.spacing(2),
    }
}));

function LoginLoading() {
    const classes = useStyles();

    return (
        <PageBoxTemplate>
            <Grid container>
                <Grid item container justify="center" className={classes.row}>
                    <Typography variant="h5">Loading...</Typography>
                </Grid>
                <Grid item container justify="center" className={classes.row}>
                    <CircularProgress />
                </Grid>
            </Grid>
        </PageBoxTemplate>
    );
}

export default LoginLoading;
