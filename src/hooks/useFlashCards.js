import React, { useContext } from 'react';
import { FlashCardsApiContext, FlashCardsApiDispatchContext } from '../context/FlashCardsApiProvider';

export function useFlashCards() {
    const flashCards = useContext(FlashCardsApiContext);

    return flashCards;
};

export function useSetFlashCards(data) {
    const setFlashCards = useContext(FlashCardsApiDispatchContext);

    return setFlashCards(data);
}
