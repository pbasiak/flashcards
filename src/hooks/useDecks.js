import { useRequest } from './useRequest';
import qs from 'qs';
import ROUTES from '../const/routes';

function useDecks(queryParams = {}) {
    const query = qs.stringify({
        Title: queryParams?.name,
        'tags.name': queryParams?.tag,
    });
    
    const { data: decks = [], loading: isDecksLoading, error: isDecksError, refetch: refetchDecks } = useRequest(`${ROUTES.Decks.path}/?${query}`);

    return {
        decks,
        isDecksLoading,
        isDecksError,
        refetchDecks,
    }
};

function useDecksCount() {
    const { data: decksCount, loading: isDeckCountLoading, error: decksCountError, refetch: refetchDecksCount } = useRequest('/decks/count');

    return {
        decksCount,
        isDeckCountLoading,
        decksCountError,
        refetchDecksCount,
    }
};

function useDeck({id}) {
    const { data: deck = {}, loading: isDeckLoading, error: isDeckError, refetch: refetchDeck } = useRequest(`/decks/${id}`);

    return {
        deck,
        isDeckLoading,
        isDeckError,
        refetchDeck,
    }
}

function useAddDeck({deck}) {
    const { data: addDeck, refetch: executeAddDeck } = useRequest(ROUTES.Decks.path, {
        method: 'post',
        data: {
            ...deck
        }
    }, true);

    return { addDeck, executeAddDeck };
}

function useDeleteDeck({id}) {
    const { data: deleteDeckData, refetch: executeDeleteDeck } = useRequest(`${ROUTES.Decks.path}/${id}`, {
        method: 'delete',
    }, true);

    return { deleteDeckData, executeDeleteDeck };
}

function useEditDeck({deck}) {
    const { data: editDeckData, refetch: executeEditDeck } = useRequest(ROUTES.Decks.path, {
        method: 'delete',
        data: {
            ...deck
        }
    }, true);

    return { editDeckData, executeEditDeck };
}

export { useDecks, useDecksCount, useDeck, useAddDeck, useDeleteDeck, useEditDeck };
