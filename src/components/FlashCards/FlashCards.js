import React from 'react';
import { useFlashCards, useFlashCardsByDeck, useFlashCardsByTag } from '../../hooks/useFlashCards';
import FlashCardItem from './FlashCardItem';

function FlashCards({ tag, deckId }) {
    const FlashCardList = () => {
        const flashCards = useFlashCards();
        const flashCardsByTag = useFlashCardsByTag(tag);
        const flashCardsByDeck = useFlashCardsByDeck(deckId);

        if (tag) {
            const flashCardsByTagList = flashCardsByTag.map(item => {
                return <FlashCardItem title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" />
            });

            return flashCardsByTagList;
        }

        if (deckId) {
            const flashCardsByDeckList = flashCardsByDeck.map(item => {
                return <FlashCardItem title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" />
            });

            return flashCardsByDeckList;
        }

        const flashCardsList = flashCards.map(item => {
            return <FlashCardItem title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" />;
        });

        return flashCardsList;
    }

    return (
        <div className="bx--gridxx">
            <div className="bx--row">
                <div className="bx--col-md-8">
                    <FlashCardList />
                </div>
            </div>
        </div>
    );
}

export default FlashCards;
