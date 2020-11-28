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

export { useDecks };
