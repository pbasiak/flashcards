import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCards from '../../components/FlashCards/FlashCards';
import PageTemplate from '../../components/PageTemplate/PageTemplate';

function DeckDetails() {
    const { id } = useParams();

    return (
        <PageTemplate>
            <FlashCards deckId={id} />
        </PageTemplate>
    );
}

export default DeckDetails;
