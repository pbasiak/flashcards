import React from 'react';
import decksData from '../../api/mockDecks';
import cardsData from '../../api/mockFlashCard';
import './DecksList.scss';
import { useHistory } from 'react-router-dom';
import DeckItem from '../DeckItem/DeckItem';

function DecksList() {
    const history = useHistory();
    const decksList = decksData.map(item => {
        function handlePlayDeck(e) {
            e.preventDefault();

            history.push(`/deck/${item.id}`);
        };

        function handleShowDeck(e) {
            e.preventDefault();

            history.push(`/deck/${item.id}/details`);
        };

        const cardsCount = cardsData.map(({deck}) => deck).filter(deck => deck.includes(item.id.toString()));

        return (
            <DeckItem name={item.name} cardsCount={cardsCount.length} likesCount="11" commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={handleShowDeck} />
        );
    });



    return (
        <div>
            {decksList}
        </div>
    );
}

export default DecksList;
