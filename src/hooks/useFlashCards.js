import { useRequest } from './useRequest';
import qs from 'qs';
import ROUTES from '../const/routes';

function useFlashCards(queryParams = {}) {
    const query = qs.stringify({
        Title: queryParams?.name,
        'tags.name': queryParams?.tag,
        'decks.id': queryParams?.deckId,
        '_limit': queryParams?.limit,
        '_start': queryParams?.start,
        'title_contains': queryParams?.title
    });

    const { data: flashCards = [], loading: isFlashCardsLoading, error: isFlashCardsError, refetch: refetchFlashCards } = useRequest(`/flashcards?${query}`);
    const { data: flashCardsCount = [], loading: isFlashCardsCountLoading, error: flashCardsCountError, refetch: refetchFlashCardsCount } = useRequest(`/flashcards/count?${query}`);

    return {
        flashCards,
        isFlashCardsLoading,
        isFlashCardsError,
        refetchFlashCards,
        flashCardsCount,
        isFlashCardsCountLoading,
        flashCardsCountError,
        refetchFlashCardsCount,
    };
};

function useFlashCardsCount() {
    const { data: flashCardsCount, loading: isFlashCardsCountLoading, error: isFlashCardsCountError, refetch: refetchFlashCardsCount } = useRequest('/flashcards/count');

    return {
        flashCardsCount,
        isFlashCardsCountLoading,
        isFlashCardsCountError,
        refetchFlashCardsCount,
    }
};


function useFlashCard({ id }) {
    const { data: flashCard = {}, loading: isFlashCardLoading, error: isFlashCardError, refetch: refetchFlashCard } = useRequest(`/flashcards/${id}`);

    return {
        flashCard,
        isFlashCardLoading,
        isFlashCardError,
        refetchFlashCard,
    }
}

function useAddFlashCard(flashcard) {
    const { data: addFlashCardData, refetch: execute } = useRequest(ROUTES.FlashCards.path, {
        method: 'post',
        data: {
            ...flashcard
        }
    }, true);

    return { addFlashCardData, execute };
}

function useDeleteFlashCard(id) {
    const { data: deleteFlashCardData, refetch: deleteFlashCard } = useRequest(`${ROUTES.FlashCards.path}/${id}`, {
        method: 'delete',
    }, true);

    if (!id) {
        return { deleteFlashCardData: null, deleteFlashCard: null } // TODO: Is this a proper way to validate function parameter? (ID is required)
    }

    return { deleteFlashCardData, deleteFlashCard };
}

function useEditFlashCard(flashcard, id) {
    const { data: editFlashCardData, refetch: executeEditFlashCard } = useRequest(`/flashcards/${id}`, {
        method: 'put',
        data: {
            ...flashcard
        }
    }, true);

    return { editFlashCardData, executeEditFlashCard };
}


export { useFlashCards, useFlashCardsCount, useFlashCard, useAddFlashCard, useEditFlashCard, useDeleteFlashCard };
