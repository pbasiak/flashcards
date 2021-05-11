import { Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import ROUTES from "../../const/routes";
import { useDeck, useDeckAuthor } from "../../hooks/useDecks";

function DeckDetails() {
  const history = useHistory();
  const { deckId } = useParams();
  const { deck, isDeckLoading } = useDeck({ id: Number(deckId) });
  const { isAuthor } = useDeckAuthor({ deck });

  const handleEditClick = useCallback(() =>
    history.push(`${ROUTES.Decks.path}/${deckId}/edit`)
  );

  const deckTitle = isDeckLoading ? (
    <Skeleton variant="text" />
  ) : (
    <>
      Deck: <strong>{deck.title}</strong>{" "}
      {isAuthor ? (
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={handleEditClick}
        >
          Edit
        </Button>
      ) : null}
    </>
  );

  return (
    <PageWithSidebarTemplate title={deckTitle}>
      <FlashCardsList deckId={Number(deckId)} deckView={true} />
    </PageWithSidebarTemplate>
  );
}

export default DeckDetails;
