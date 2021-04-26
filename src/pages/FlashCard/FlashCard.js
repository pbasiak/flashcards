import React from "react";
import { useParams } from "react-router-dom";
import { useFlashCard } from "../../hooks/useFlashCards";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import SingleFlashCard from "../../components/FlashCards/SingleFlashCard";

function FlashCard() {
  const { flashCardId } = useParams();
  const {
    flashCard: { title },
    flashCard,
    isFlashCardLoading,
  } = useFlashCard({ id: flashCardId });

  return (
    <PageWithSidebarTemplate title={title} isLoading={isFlashCardLoading}>
      <SingleFlashCard
        flashCard={flashCard}
        flashCardId={flashCardId}
        isFlashCardLoading={isFlashCardLoading}
      />
    </PageWithSidebarTemplate>
  );
}

export default FlashCard;
