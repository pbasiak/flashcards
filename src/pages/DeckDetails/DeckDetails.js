import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { useParams } from 'react-router-dom';
import FlashCardsList from '../../components/FlashCards/FlashCardsList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import { useDeck } from '../../hooks/useDecks';

function DeckDetails() {
    const { id } = useParams();
    const { deck, isDeckLoading } = useDeck({id: Number(id)});

    const deckTitle = isDeckLoading ? <Skeleton variant="text" />: <>Deck: <strong>{deck.Title}</strong></>;

    return (
        <PageWithSidebarTemplate title={deckTitle}>
            <FlashCardsList deckId={Number(id)} />
        </PageWithSidebarTemplate>
    );
}

export default DeckDetails;
