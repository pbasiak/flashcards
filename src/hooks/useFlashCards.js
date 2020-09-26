import React, { useContext } from 'react';
import { FlashCardsApiContext, FlashCardsApiDispatchContext } from '../context/FlashCardsApiProvider';
import { useTags } from './useTags';

export function useFlashCards() {
    const flashCards = useContext(FlashCardsApiContext);

    return flashCards;
};

export function useSetFlashCards(data) {
    const setFlashCards = useContext(FlashCardsApiDispatchContext);

    return setFlashCards(data);
}

export function useFlashCardsByTag(tag) {
    const flashCards = useFlashCards();
    const tags = useTags();

    const currentTag = tags.find(item => item.name === tag);

    const flashCardsByTag = flashCards.map(item => {
        if (item.tags.find(item => tag && item.name.toString() === currentTag.name.toString())) {
            return item;
        }

        return null;
    }).filter(item => item != null);

    return flashCardsByTag;
}

export function useFlashCardsByDeck(deckId) {
    const flashCards = useFlashCards();

    const flashCardsByDeck = flashCards.map(item => {
        if (item.decks.find(item => deckId && item.id.toString() === deckId.toString())) {
            return item;
        }

        return null;
    }).filter(item => item != null);

    return flashCardsByDeck;
}
