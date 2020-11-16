import React from 'react';
import DecksList from '../../components/DecksList/DecksList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function Decks() {
    return (
        <PageWithSidebarTemplate title="Decks">
            <DecksList />
        </PageWithSidebarTemplate>
    );
}

export default Decks;
