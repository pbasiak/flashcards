import { useRequest } from './useRequest';
import qs from 'qs';

function useFlashCards(queryParams = {}) {
    const query = qs.stringify({
        Title: queryParams?.name,
        'tags.name': queryParams?.tag,
        deckId: queryParams?.deckId
    });

    const { data: flashCards = [], loading: isFlashCardsLoading, error: isFlashCardsError, refetch: refetchFlashCards } = useRequest(`/flashcards?${query}`);
    
    return {
        flashCards,
        isFlashCardsLoading,
        isFlashCardsError,
        refetchFlashCards
    };
};

export { useFlashCards };
