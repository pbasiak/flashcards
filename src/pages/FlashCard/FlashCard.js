import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFlashCard } from "../../hooks/useFlashCards";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import SingleFlashCard from "../../components/FlashCards/SingleFlashCard";

function FlashCard() {
  const { flashCardId } = useParams();
  const {
    flashCard: { title },
    isFlashCardLoading,
  } = useFlashCard({ id: flashCardId });
  const history = useHistory();

  const handleBack = () => history.push(`/flashcards`);
  const handleEditClick = () => history.push(`/flashcards/${flashCardId}/edit`);

  return (
    <PageWithSidebarTemplate
      title={title}
      navigation={{
        isVisible: true,
        onBackClick: handleBack,
        onEditClick: handleEditClick,
      }}
      isLoading={isFlashCardLoading}
    >
      <SingleFlashCard />
    </PageWithSidebarTemplate>
  );
}

export default FlashCard;
