import { useRequest } from './useRequest';
import qs from 'qs';
import ROUTES from '../const/routes';

function useDecks({ name, tag, limit, start, title }) {
    const query = qs.stringify({
        Title: name,
        'tags.name': tag,
        '_limit': limit,
        '_start': start,
        'Title_contains': title,
    });

    const { data: decks = [], loading: isDecksLoading, error: isDecksError, refetch: refetchDecks } = useRequest(`${ROUTES.Decks.path}/?${query}`);
    const { data: decksCount = null, loading: isDecksCountLoading, error: decksCountError, refetch: refetchDecksCount } = useRequest(`${ROUTES.Decks.path}/count?${query}`);

    return {
        decks,
        isDecksLoading,
        isDecksError,
        refetchDecks,
        decksCount,
        isDecksCountLoading,
        decksCountError,
        refetchDecksCount,
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

function useDeck({ id }) {
    const { data: deck = {}, loading: isDeckLoading, error: isDeckError, refetch: refetchDeck } = useRequest(`/decks/${id}`);

    return {
        deck,
        isDeckLoading,
        isDeckError,
        refetchDeck,
    }
}

function useAddDeck({ deck }) {
    const { data: addDeck, refetch: executeAddDeck } = useRequest(ROUTES.Decks.path, {
        method: 'post',
        data: {
            ...deck
        }
    }, true);

    return { addDeck, executeAddDeck };
}

function useDeleteDeck({ id }) {
    const { data: deleteDeckData, refetch: executeDeleteDeck } = useRequest(`${ROUTES.Decks.path}/${id}`, {
        method: 'delete',
    }, true);

    return { deleteDeckData, executeDeleteDeck };
}

function useEditDeck({ deck }) {
    const { data: editDeckData, refetch: executeEditDeck } = useRequest(ROUTES.Decks.path, {
        method: 'delete',
        data: {
            ...deck
        }
    }, true);

    return { editDeckData, executeEditDeck };
}

export { useDecks, useDecksCount, useDeck, useAddDeck, useDeleteDeck, useEditDeck };
