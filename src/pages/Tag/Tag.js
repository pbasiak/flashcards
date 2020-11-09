import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import DecksList from '../../components/DecksList/DecksList';
import FlashCards from '../../components/FlashCards/FlashCards';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import Sidebar from '../../components/Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    heading: {
        margin: `${theme.spacing(4)}px 0`,
    }
}));

function Tag() {
    const { name } = useParams();
    const classes = useStyles();

    return (
        <PageWithSidebarTemplate sidebar={<Sidebar />}>
            <Typography className={classes.heading} variant="h4">Latest <strong>Decks</strong></Typography>
            <DecksList tag={name} />
            <Typography className={classes.heading} variant="h4">Latest <strong>Cards</strong></Typography>
            <FlashCards tag={name} />
        </PageWithSidebarTemplate>
    );
}

export default Tag;
