import React from "react";
import DecksList from "../../components/DecksList/DecksList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { DECK_STATUS_PENDING } from "../../const/status";
import { useUser } from "../../hooks/useUser";

function MyDecks() {
  const { user } = useUser();

  return (
    <PageWithSidebarTemplate title="My Decks">
      <DecksList
        searchEnabled={true}
        status={DECK_STATUS_PENDING}
        authorId={user.id}
      />
    </PageWithSidebarTemplate>
  );
}

export default MyDecks;
