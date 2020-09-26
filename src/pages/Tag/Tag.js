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
            <h3>Decks</h3>
            <DecksList tag={name} />
            <h3>FlashCards</h3>
            <FlashCards tag={name} />
        </PageWithSidebarTemplate>
    );
}

export default Tag;
