import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFlashCard, useFlashCardAuthor } from "../../hooks/useFlashCards";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import SingleFlashCard from "../../components/FlashCards/SingleFlashCard";
import FlashCardActions from "../../components/CardActions/FlashCardActions";
import ROUTES from "../../const/routes";

function FlashCard() {
  const history = useHistory();
  const { flashCardId } = useParams();
  const {
    flashCard: { title },
    flashCard,
    isFlashCardLoading,
  } = useFlashCard({ id: flashCardId });
  const { isAuthor } = useFlashCardAuthor({ flashCard });

  const handleEditClick = useCallback(() =>
    history.push(`${ROUTES.FlashCards.path}/${flashCardId}/edit`)
  );

  return (
    <PageWithSidebarTemplate
      title={title}
      isLoading={isFlashCardLoading}
      actionArea={
        <FlashCardActions edit={isAuthor} handleEdit={handleEditClick} />
      }
    >
      <SingleFlashCard
        flashCard={flashCard}
        flashCardId={flashCardId}
        isFlashCardLoading={isFlashCardLoading}
      />
    </PageWithSidebarTemplate>
  );
}

export default FlashCard;
