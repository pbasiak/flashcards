import { useTags } from './useTags';
import { useRequest } from './useRequest';

function useDecks({ tag } = {}) {
    const tags = useTags();
    const { data: decks = [], loading: isDecksLoading, error: isDecksError, refetchDecks } = useRequest('/decks');

    console.log(decks);

    if (tag) {
        const currentTag = tags.find(item => item.name === tag);
        const decksByTag = decks.map(item => {
            if (item.tags.find(item => tag && item.id.toString() === currentTag.id.toString())) {
                return item;
            }

            return null;
        }).filter(item => item != null);

        return { decksByTag }
    }

    return {
        decks,
        isDecksLoading,
        isDecksError,
        refetchDecks,
    }
};

export { useDecks };
