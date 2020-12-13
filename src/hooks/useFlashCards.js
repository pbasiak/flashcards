import { useRequest } from './useRequest';
import qs from 'qs';
import ROUTES from '../const/routes';

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


export { useFlashCards, useFlashCard, useAddFlashCard, useEditFlashCard, useDeleteFlashCard };
