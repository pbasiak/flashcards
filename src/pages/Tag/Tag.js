import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import DecksList from '../../components/DecksList/DecksList';
import FlashCardsList from '../../components/FlashCards/FlashCardsList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import Sidebar from '../../components/Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    heading: {
        margin: `${theme.spacing(4)}px 0`,
        marginTop: '0',
    },
    left: {
        paddingRight: theme.spacing(2),
    },
    right: {
        paddingLeft: theme.spacing(2),
    }
}));

function Tag() {
    const { name } = useParams();
    const classes = useStyles();

    return (
        <PageWithSidebarTemplate sidebar={<Sidebar />}>
            <Grid container>
                <Grid item md={6} className={classes.left}>
                    <Typography className={classes.heading} variant="h4">Latest <strong>Decks</strong></Typography>
                    <DecksList tag={name} />
                </Grid>
                <Grid item md={6} className={classes.right}>
                    <Typography className={classes.heading} variant="h4">Latest <strong>Cards</strong></Typography>
                    <FlashCardsList tag={name} />
                </Grid>
            </Grid>
        </PageWithSidebarTemplate>
    );
}

export default Tag;
