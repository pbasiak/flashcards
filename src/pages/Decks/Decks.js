import React from "react";
import DecksList from "../../components/DecksList/DecksList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";

function Decks() {
  return (
    <PageWithSidebarTemplate
      title={
        <>
          Search <strong>Decks</strong>
        </>
      }
    >
      <DecksList searchEnabled={true} />
    </PageWithSidebarTemplate>
  );
}

export default Decks;
