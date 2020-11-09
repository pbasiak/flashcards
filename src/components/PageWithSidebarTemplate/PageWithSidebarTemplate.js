import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#FFF',
    },
    sidebarContainer: {
        maxWidth: '300px',
    },
    contentContainer: {
        margin: '0',
    },
    content: {
        background: '#F7F9FA',
    },
    title: {
        background: '#FFF',
    }
}));

function PageWithSidebarTemplate({ children, title }) {
    const classes = useStyles();

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Grid container spacing={0}>
                <Grid item xs className={classes.sidebarContainer}>
                    <Sidebar />
                </Grid>
                <Grid item container xs spacing={8} className={classes.contentContainer} justify="flex-start" alignItems="flex-start" alignContent="flex-start">
                    <Grid item sm={12} className={classes.title}>
                        <Typography variant="h3">{title}</Typography>
                    </Grid>
                    <Grid item sm={12} classes={classes.content}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

PageWithSidebarTemplate.defaultProps = {
    title: <>Welcome to <strong>LearnDev</strong></>
};

export default PageWithSidebarTemplate;
