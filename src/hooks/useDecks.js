import { useRequest } from './useRequest';
import qs from 'qs';

function useDecks(queryParams = {}) {
    const query = qs.stringify({
        Title: queryParams?.name,
        'tags.name': queryParams?.tag,
    });
    
    const { data: decks = [], loading: isDecksLoading, error: isDecksError, refetch: refetchDecks } = useRequest(`/decks?${query}`);

    return {
        decks,
        isDecksLoading,
        isDecksError,
        refetchDecks,
    }
};

function useDeck({id}) {
    const { data: deck = [], loading: isDeckLoading, error: isDeckError, refetch: refetchDeck } = useRequest(`/decks/${id}`);

    return {
        deck,
        isDeckLoading,
        isDeckError,
        refetchDeck,
    }
}

export { useDecks, useDeck };
