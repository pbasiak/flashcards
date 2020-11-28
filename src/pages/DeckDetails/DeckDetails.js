import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCardsList from '../../components/FlashCards/FlashCardsList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import { useDeck } from '../../hooks/useDecks';

function DeckDetails() {
    const { id } = useParams();
    const { deck } = useDeck({id});

    console.log(deck);

    return (
        <PageWithSidebarTemplate title={<>Deck: <strong>{deck.Title}</strong></>}>
            <FlashCardsList deckId={id} />
        </PageWithSidebarTemplate>
    );
}

export default DeckDetails;
