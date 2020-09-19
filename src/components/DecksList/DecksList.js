import React from 'react';
import './DecksList.scss';
import { useHistory } from 'react-router-dom';
import DeckItem from '../DeckItem/DeckItem';
import { useDecks } from '../../hooks/useDecks';
import { useFlashCards } from '../../hooks/useFlashCards';

function DecksList() {
    const history = useHistory();
    const decks = useDecks();
    const cards = useFlashCards();
    const decksList = decks.map(item => {
        function handlePlayDeck(e) {
            e.preventDefault();

            history.push(`/deck/${item.id}`);
        };

        function handleShowDeck(e) {
            e.preventDefault();

            history.push(`/deck/${item.id}/details`);
        };

        const cardsCount = cards.map(({decks}) => decks).filter(deck => deck.find(element => element.id.toString() === item.id.toString()));

        return (
            <DeckItem name={item.Title} cardsCount={cardsCount.length} likesCount="11" commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={handleShowDeck} />
        );
    });



    return (
        <div>
            {decksList}
        </div>
    );
}

export default DecksList;
