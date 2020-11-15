import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(251,253,254,1) 120px, rgba(233,241,245,1) 100%)',
    },
    sidebarContainer: {
        maxWidth: '280px',
    },
    contentContainer: {
        margin: '0',
    },
    content: {
        background: '#F7F9FA',
    },
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
                            <Typography variant="h3">{title}</Typography>
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
