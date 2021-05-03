import { Button } from "@material-ui/core";
import React from "react";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import AddIcon from "@material-ui/icons/Add";
import ROUTES from "../../const/routes";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function FlashCards() {
  const { isRoleAdmin } = useUser();
  const FlashCardsTitle = (
    <>
      Search <strong>FlashCards</strong>{" "}
      {isRoleAdmin && (
        <Button
          size="small"
          component={Link}
          to={ROUTES.AddFlashCard.path}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add FlashCard
        </Button>
      )}
    </>
  );

  return (
    <PageWithSidebarTemplate title={FlashCardsTitle}>
      <FlashCardsList searchEnabled={true} />
    </PageWithSidebarTemplate>
  );
}

export default FlashCards;
