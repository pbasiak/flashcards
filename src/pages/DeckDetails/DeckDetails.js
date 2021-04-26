import { Skeleton } from "@material-ui/lab";
import React from "react";
import { useParams } from "react-router-dom";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { useDeck } from "../../hooks/useDecks";

function DeckDetails() {
  const { deckId } = useParams();
  const { deck, isDeckLoading } = useDeck({ id: Number(deckId) });

  const deckTitle = isDeckLoading ? (
    <Skeleton variant="text" />
  ) : (
    <>
      Deck: <strong>{deck.Title}</strong>
    </>
  );

  return (
    <PageWithSidebarTemplate title={deckTitle}>
      <FlashCardsList deckId={Number(deckId)} deckView={true} />
    </PageWithSidebarTemplate>
  );
}

export default DeckDetails;
