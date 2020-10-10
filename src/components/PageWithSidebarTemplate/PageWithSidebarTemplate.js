import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { Container, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4)
    }
}));

function PageWithSidebarTemplate({ children, sidebar }) {
    const classes = useStyles();

    return (
        <div>
            <PageHeader />
            <Container className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item sm={4}>
                        {sidebar}
                    </Grid>
                    <Grid item sm={8}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default PageWithSidebarTemplate;
