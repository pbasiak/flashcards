import { Box, Breadcrumbs, Button, Link, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useCallback } from "react";
import { useHistory, useParams, Link as RouterLink } from "react-router-dom";
import SingleFlashCard from "../../components/FlashCards/SingleFlashCard";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import ROUTES from "../../const/routes";
import { useDeck } from "../../hooks/useDecks";
import { useFlashCard, useFlashCards } from "../../hooks/useFlashCards";

function DeckFlashCard() {
  const history = useHistory();
  const { deckId, flashCardId } = useParams();
  const { deck, isDeckLoading } = useDeck({ id: Number(deckId) });
  const { flashCards, isFlashCardsLoading } = useFlashCards({ deckId });

  const currentFlashCardIndex = flashCards.indexOf(
    flashCards.find((item) => Number(item.id) === Number(flashCardId))
  );

  const currentFlashCardId = flashCards[currentFlashCardIndex]?.id;
  const previousFlashCardId = flashCards[currentFlashCardIndex - 1]?.id;
  const nextFlashCardId = flashCards[currentFlashCardIndex + 1]?.id;

  const {
    flashCard: { title: flashCardTitle },
    isFlashCardLoading,
  } = useFlashCard({ id: currentFlashCardId });

  const isLoading = isFlashCardsLoading || isFlashCardLoading || isDeckLoading;

  const onPreviousClick = useCallback(
    () => history.push(`/decks/${deckId}/${previousFlashCardId}`),
    [history, deckId, previousFlashCardId]
  );
  const onNextClick = useCallback(
    () => history.push(`/decks/${deckId}/${nextFlashCardId}`),
    [history, deckId, nextFlashCardId]
  );

  const breadcrumb = (
    <Breadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to={ROUTES.Home.path}>
        {isLoading ? <Skeleton width="100px" /> : "Decks"}
      </Link>
      <Link component={RouterLink} to={`/decks/${deck.id}`}>
        {isLoading ? <Skeleton width="100px" /> : deck.Title}
      </Link>
      <Typography color="textPrimary">
        {isLoading ? <Skeleton width="100px" /> : flashCardTitle}
      </Typography>
    </Breadcrumbs>
  );

  return (
    <PageWithSidebarTemplate
      title={
        isLoading ? <Skeleton width="80%" height="40px" /> : flashCardTitle
      }
      breadcrumb={breadcrumb}
    >
      <Box marginBottom="24px" display="flex" justifyContent="space-between">
        {isLoading ? (
          <>
            <Skeleton width="150px" height="40px" />
            <Skeleton width="150px" height="40px" />
          </>
        ) : (
          <>
            <Button
              disabled={!previousFlashCardId}
              variant="contained"
              onClick={onPreviousClick}
              color="primary"
              size="large"
            >
              Previous FlashCard
            </Button>
            <Button
              disabled={!nextFlashCardId}
              variant="contained"
              color="primary"
              onClick={onNextClick}
              size="large"
            >
              Next FlashCard
            </Button>
          </>
        )}
      </Box>
      <SingleFlashCard />
    </PageWithSidebarTemplate>
  );
}

export default DeckFlashCard;
