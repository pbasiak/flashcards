import React from "react";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { FLASH_CARD_STATUS_PENDING } from "../../const/status";

function MyFlashCards() {
  return (
    <PageWithSidebarTemplate title="My FlashCards">
      <FlashCardsList searchEnabled={true} status={FLASH_CARD_STATUS_PENDING} />
    </PageWithSidebarTemplate>
  );
}

export default MyFlashCards;
