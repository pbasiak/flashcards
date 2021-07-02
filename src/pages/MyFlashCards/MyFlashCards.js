import React from "react";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { FLASH_CARD_STATUS_PENDING } from "../../const/status";
import { useUser } from "../../hooks/useUser";

function MyFlashCards() {
  const { user } = useUser();

  return (
    <PageWithSidebarTemplate title="My FlashCards">
      <FlashCardsList searchEnabled={true} status={FLASH_CARD_STATUS_PENDING} authorId={user.id}  />
    </PageWithSidebarTemplate>
  );
}

export default MyFlashCards;
