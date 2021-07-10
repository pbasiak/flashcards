import React from "react";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { FLASH_CARD_STATUS_PUBLISH } from "../../const/status";

function FlashCards() {
  return (
    <PageWithSidebarTemplate title={`Search FlashCards`}>
      <FlashCardsList searchEnabled={true} status={FLASH_CARD_STATUS_PUBLISH} />
    </PageWithSidebarTemplate>
  );
}

export default FlashCards;
