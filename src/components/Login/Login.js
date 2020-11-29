import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import PageBoxTemplate from '../PageBoxTemplate.js/PageBoxTemplate';
import { API_URL } from '../../const/api';
import CardBox from '../CardBox/CardBox';

const useStyles = makeStyles((theme) => ({
    loginTitle: {
        marginBottom: theme.spacing(5),
    },
    strong: {
        color: theme.palette.primary.main,
    }
}));

function Login() {
    const classes = useStyles();

    return (
        <PageBoxTemplate>
            <CardBox>
                <Grid container>
                    <Grid item container justify="center">
                        <Typography variant="h4" className={classes.loginTitle}>Login to Learn<strong className={classes.strong}>Dev</strong></Typography>
                    </Grid>
                    <Grid item container justify="center">
                        <Button color="primary" href={`${API_URL}/connect/github`} variant="contained" startIcon={<GitHubIcon />}>Login with Github</Button>
                    </Grid>
                </Grid>
            </CardBox>
        </PageBoxTemplate>

    );
}

export default Login;
