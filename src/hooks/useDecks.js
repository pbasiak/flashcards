import { useContext } from 'react';
import { DecksApiContext, DecksApiDispatchContext } from '../context/DecksApiProvider';
import { useTags } from './useTags';
import axios from 'axios';
import { useUserJwt } from './useUser';
import { API_URL } from '../const/api';

function useDecks() {
    const decks = useContext(DecksApiContext);

    return decks;
};

function useRequestDecks() {
    const jwt = useUserJwt();
    const setDecks = useContext(DecksApiDispatchContext);

    const getDecks = async () => await axios.get(`${API_URL}/decks`, {
        headers: {
            Authorization:
                `Bearer ${jwt}`,
        },
    }).then(response => {
        setDecks(response.data);
    });

    if (jwt) {
        return getDecks;
    }

    return () => false;
}

function useSetDecks(data) {
    const setDecks = useContext(DecksApiDispatchContext);

    return setDecks(data);
}

function useDecksByTag(tag) {
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

function useDeckPostLike(deckId) {
    const jwt = useUserJwt();
    const requestDecks = useRequestDecks();
    return async () => {
        await axios.put(`${API_URL}/decks/${deckId}/like`, {}, {
            headers: {
                Authorization:
                    `Bearer ${jwt}`,
            },
        });
        
        requestDecks();
    }
}

function useDeckPostUnlike(deckId) {
    const jwt = useUserJwt();
    const requestDecks = useRequestDecks();
    return async () => {
        await axios.put(`${API_URL}/decks/${deckId}/unlike`, {}, {
            headers: {
                Authorization:
                    `Bearer ${jwt}`,
            },
        });

        requestDecks();
    }
}


export { useDecks, useRequestDecks, useSetDecks, useDecksByTag, useDeckPostLike, useDeckPostUnlike };
