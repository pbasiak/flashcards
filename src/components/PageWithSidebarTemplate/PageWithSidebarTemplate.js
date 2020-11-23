import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#E9EDF1',
    },
    sidebarContainer: {
        maxWidth: '260px',
    },
    contentContainer: {
        margin: '0',
    },
    content: {
        background: '#F7F9FA',
    },
    title: {
        fontSize: '36px',
    }
}));

function PageWithSidebarTemplate({ children, title }) {
    const classes = useStyles();

    return (
        <Container maxWidth={false} disableGutters={true} className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs className={classes.sidebarContainer}>
                    <Sidebar />
                </Grid>
                <Grid item container xs spacing={8} className={classes.contentContainer} justify="flex-start" alignItems="flex-start" alignContent="flex-start">
                    {
                        title &&
                        <Grid item sm={12} className={classes.title}>
                            <Typography variant="h1" className={classes.title}>{title}</Typography>
                        </Grid>
                    }
                    <Grid item sm={12} classes={classes.content}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PageWithSidebarTemplate;
