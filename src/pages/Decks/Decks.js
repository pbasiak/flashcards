import React from 'react';
import DecksList from '../../components/DecksList/DecksList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function Decks() {
    console.log('Render Decks');

    return (
        <PageWithSidebarTemplate title={<>Search <strong>Decks</strong></>}>
            <DecksList />
        </PageWithSidebarTemplate>
    );
}

export default Decks;
