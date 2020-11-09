import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCards from '../../components/FlashCards/FlashCards';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function DeckDetails() {
    const { id } = useParams();

    return (
        <PageWithSidebarTemplate>
            <FlashCards deckId={id} />
        </PageWithSidebarTemplate>
    );
}

export default DeckDetails;
