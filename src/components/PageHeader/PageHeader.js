import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navigationItem: {
        marginRight: theme.spacing(2),
    },
}));

export default function PageHeader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid item container sm={12} justify="space-between" alignItems="center" flexGrow="1">
                        <Typography variant="h6" color="inherit">
                            <Link component={RouterLink} to="/" color="inherit">Fiszki App</Link>
                        </Typography>
                        <div className="">
                            <Link className={classes.navigationItem} component={RouterLink} to="/decks" color="inherit">Decks</Link>
                            <Link className={classes.navigationItem} component={RouterLink} to="/logout" color="inherit">Logout</Link>
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
