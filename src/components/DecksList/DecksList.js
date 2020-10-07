import React from 'react';
import './DecksList.scss';
import { useHistory } from 'react-router-dom';
import DeckItem from '../DeckItem/DeckItem';
import { useDecks, useDecksByTag } from '../../hooks/useDecks';
import { useFlashCards } from '../../hooks/useFlashCards';

function DecksList({ tag }) {
    const history = useHistory();
    const decks = useDecks();
    const decksByTag = useDecksByTag(tag);
    const cards = useFlashCards();

    function handlePlayDeck(e) {
        e.preventDefault();

        history.push(`/deck/${1}`);
    };

    function handleShowDeck(e) {
        e.preventDefault();

        history.push(`/deck/${1}`);
    };

    const DecksListAll = () => {
        if (tag) {
            const decksByTagList = decksByTag.map(item => {
                const cardsCount = cards.map(({ decks }) => decks).filter(deck => deck.find(element => element.id.toString() === item.id.toString()));
                return <DeckItem name={item.Title} cardsCount={cardsCount.length} likesCount="11" commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={handleShowDeck} />;
            });

            return decksByTagList;
        }

        const decksList = decks.map(item => {
            const cardsCount = cards.map(({ decks }) => decks).filter(deck => deck.find(element => element.id.toString() === item.id.toString()));
            return <DeckItem name={item.Title} cardsCount={cardsCount.length} likesCount="11" commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={handleShowDeck} />;
        });

        return decksList;
    };

    const isDecksEmpty = DecksListAll().length < 1;

    return (
        <div className="bx--gridxx">
            <div className="bx--row">
                <div className="bx--col-md-8">
                    {isDecksEmpty ? <h2>No decks found</h2> : <DecksListAll />}
                </div>
            </div>
        </div>
    );
}

export default DecksList;
