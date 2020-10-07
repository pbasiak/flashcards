import { useContext } from 'react';
import { DecksApiContext, DecksApiDispatchContext } from '../context/DecksApiProvider';
import { useTags } from './useTags';

export function useDecks() {
    const decks = useContext(DecksApiContext);

    return decks;
};

export function useSetDecks(data) {
    const setDecks = useContext(DecksApiDispatchContext);

    return setDecks(data);
}

export function useDecksByTag(tag) {
    const decks = useDecks();
    const tags = useTags();

    const currentTag = tags.find(item => item.name === tag);

    const decksByTag = decks.map(item => {
        if (item.tags.find(item => tag && item.id.toString() === currentTag.id.toString())) {
            return item;
        }

        return null;
    }).filter(item => item != null);

    return decksByTag;
}
