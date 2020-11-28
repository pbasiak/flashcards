import { useRequest } from './useRequest';
import qs from 'qs';

function useFlashCards(queryParams = {}) {
    const query = qs.stringify({
        Title: queryParams?.name,
        'tags.name': queryParams?.tag,
        'decks.id': queryParams?.deckId
    });

    const { data: flashCards = [], loading: isFlashCardsLoading, error: isFlashCardsError, refetch: refetchFlashCards } = useRequest(`/flashcards?${query}`);
    
    return {
        flashCards,
        isFlashCardsLoading,
        isFlashCardsError,
        refetchFlashCards
    };
};


function useFlashCard({id}) {
    const { data: flashCard = {}, loading: isFlashCardLoading, error: isFlashCardError, refetch: refetchFlashCard } = useRequest(`/flashcards/${id}`);

    return {
        flashCard,
        isFlashCardLoading,
        isFlashCardError,
        refetchFlashCard,
    }
}


export { useFlashCards, useFlashCard };
