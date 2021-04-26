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

  return (
    <PageWithSidebarTemplate
      title={title}
      isLoading={isFlashCardLoading}
    >
      <SingleFlashCard />
    </PageWithSidebarTemplate>
  );
}

export default FlashCard;
