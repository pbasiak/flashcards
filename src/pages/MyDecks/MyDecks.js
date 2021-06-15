import React from "react";
import DecksList from "../../components/DecksList/DecksList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { DECK_STATUS_PENDING } from "../../const/status";

function MyDecks() {
  return (
    <PageWithSidebarTemplate title="My Decks">
      <DecksList searchEnabled={true} status={DECK_STATUS_PENDING} />
    </PageWithSidebarTemplate>
  );
}

export default MyDecks;
