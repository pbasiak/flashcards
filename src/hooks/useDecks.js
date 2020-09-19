import React, { useContext } from 'react';
import { DecksApiContext, DecksApiDispatchContext } from '../context/DecksApiProvider';

export function useDecks() {
    const decks = useContext(DecksApiContext);

    return decks;
};

export function useSetDecks(data) {
    const setDecks = useContext(DecksApiDispatchContext);

    return setDecks(data);
}
