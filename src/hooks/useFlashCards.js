import { useRequest } from './useRequest';
import { useTags } from './useTags';

function useFlashCards({ tag, deckId } = {}) {
    const tags = useTags();
    const { data: flashCards = [], loading: isFlashCardsLoading, error: isFlashCardsError, refetchFlashCards } = useRequest('/flashcards');

    if (tag) {
        const currentTag = tags.find(item => item.name === tag);

        const flashCardsByTag = flashCards.map(item => {
            if (item.tags.find(item => tag && item.name.toString() === currentTag.name.toString())) {
                return item;
            }

            return null;
        }).filter(item => item != null);

        return { flashCardsByTag };
    }

    if (deckId) {
        const flashCardsByDeck = flashCards.map(item => {
            if (item.decks.find(item => deckId && item.id.toString() === deckId.toString())) {
                return item;
            }

            return null;
        }).filter(item => item != null);

        return { flashCardsByDeck };
    }

    return {
        flashCards,
        isFlashCardsLoading,
        isFlashCardsError,
        refetchFlashCards
    };
};

export { useFlashCards };
