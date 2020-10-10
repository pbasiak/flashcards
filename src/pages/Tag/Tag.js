import { Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import DecksList from '../../components/DecksList/DecksList';
import FlashCards from '../../components/FlashCards/FlashCards';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import Sidebar from '../../components/Sidebar/Sidebar';

function Tag() {
    const { name } = useParams();

    return (
        <PageWithSidebarTemplate sidebar={<Sidebar />}>
            <Typography variant="h3">Decks</Typography>
            <DecksList tag={name} />
            <Typography variant="h3">FlashCards</Typography>
            <FlashCards tag={name} />
        </PageWithSidebarTemplate>
    );
}

export default Tag;
