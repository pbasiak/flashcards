import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import PageBoxTemplate from '../PageBoxTemplate.js/PageBoxTemplate';
import { API_URL } from '../../const/api';

const useStyles = makeStyles((theme) => ({
    loginTitle: {
        marginBottom: theme.spacing(2),
    }
}));

function Login() {
    const classes = useStyles();

    return (
        <PageBoxTemplate>
            <Grid container>
                <Grid item container justify="center">
                    <Typography variant="h5" className={classes.loginTitle}>Login</Typography>
                </Grid>
                <Grid item container justify="center">
                    <Button color="primary" href={`${API_URL}/connect/github`} variant="contained" startIcon={<GitHubIcon />}>Login with Github</Button>
                </Grid>
            </Grid>
        </PageBoxTemplate>

    );
}

export default Login;
