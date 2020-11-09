import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCardsList from '../../components/FlashCards/FlashCardsList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function DeckDetails() {
    const { id } = useParams();

    return (
        <PageWithSidebarTemplate>
            <FlashCardsList deckId={id} />
        </PageWithSidebarTemplate>
    );
}

export default DeckDetails;
