import React from "react";
import DecksList from "../../components/DecksList/DecksList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { DECK_STATUS_PUBLISH } from "../../const/status";

function Decks() {
  return (
    <PageWithSidebarTemplate
      title={
        <>
          Search <strong>Decks</strong>
        </>
      }
    >
      <DecksList searchEnabled={true} status={DECK_STATUS_PUBLISH} />
    </PageWithSidebarTemplate>
  );
}

export default Decks;
