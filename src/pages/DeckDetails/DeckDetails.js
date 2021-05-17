import { Skeleton } from "@material-ui/lab";
import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import FlashCardActions from "../../components/CardActions/FlashCardActions";
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
    </>
  );

  return (
    <PageWithSidebarTemplate
      title={deckTitle}
      actionArea={
        <FlashCardActions edit={isAuthor} handleEdit={handleEditClick} />
      }
    >
      <FlashCardsList deckId={Number(deckId)} deckView={true} />
    </PageWithSidebarTemplate>
  );
}

export default DeckDetails;
