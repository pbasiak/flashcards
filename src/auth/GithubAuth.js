import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import PageBoxTemplate from '../components/PageBoxTemplate.js/PageBoxTemplate';
import { Alert } from '@material-ui/lab';
import { Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    row: {
        marginBottom: theme.spacing(2),
    }
}));

function useQuery(search) {
    return new URLSearchParams(search);
}

function GithubAuth() {
    const classes = useStyles();
    const [, setCookie] = useCookies(['auth']);
    const location = useLocation();
    const { search } = location;
    const history = useHistory();
    let query = useQuery(search);
    useEffect(() => {
        if (!location) {
            return;
        }

        axios({
            method: "GET",
            url: `http://localhost:1337/auth/github/callback${search}`,
        })
            .then(res => res.data)
            .then(res => {
                setCookie('auth', res, { path: '/' });
                history.push('/');
            })
            .catch(error => {
                console.log('Error: ', error);
            });
    }, [location, history, setCookie, search]);

    const error = query.get('error');

    return (
        <PageBoxTemplate>
            <Grid container>
                <Grid item container sm={12} justify="center" className={classes.row}>
                    <Typography variant="h5">
                        {error ? 'Login failed' : 'Login in process...'}
                    </Typography>
                </Grid>
                {!error && <Grid item container sm={12} justify="center" className={classes.row}>
                    <CircularProgress />
                </Grid>}

                {error && <Grid item container sm={12} justify="center" className={classes.row}>
                    <Alert severity="error">{error}</Alert>
                </Grid>}

                {error && <Grid item container sm={12} justify="center" className={classes.row}>
                    <Button href="/" color="primary" variant="contained">Back to login page</Button>
                </Grid>}
            </Grid>
        </PageBoxTemplate>
    )
}

export default GithubAuth;
