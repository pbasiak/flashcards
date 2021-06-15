import { Link as RouterLink, useHistory } from "react-router-dom";
import React, { useCallback } from "react";
import Block from "../Block/Block";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SidebarList from "../SidebarMenu/SidebarList";
import SidebarItem from "../SidebarMenu/SidebarItem";
import ROUTES from "../../const/routes";

function MenuBlock() {
  const history = useHistory();

  const handleAddFlashCard = useCallback((event) => {
    event.stopPropagation();
    history.push(ROUTES.AddFlashCard.path);
  });

  const handleAddDeck = useCallback((event) => {
    event.stopPropagation();
    history.push(ROUTES.AddDeck.path);
  });

  return (
    <Block renderTitle="Navigation">
      <SidebarList>
        <SidebarItem
          icon={<DashboardRoundedIcon />}
          button
          component={RouterLink}
          to={ROUTES.Dashboard.path}
        >
          Dashboard
        </SidebarItem>
        <SidebarItem
          icon={<ViewCarouselRoundedIcon />}
          button
          component={RouterLink}
          to={ROUTES.MyDecks.path}
          action={handleAddDeck}
          actionIcon={<AddBoxIcon />}
        >
          My Decks
        </SidebarItem>
        <SidebarItem
          icon={<ViewCarouselRoundedIcon />}
          button
          component={RouterLink}
          to={ROUTES.Decks.path}
          action={handleAddDeck}
          actionIcon={<AddBoxIcon />}
        >
          Decks
        </SidebarItem>
        <SidebarItem
          icon={<RecentActorsRoundedIcon />}
          button
          component={RouterLink}
          to={ROUTES.FlashCards.path}
          action={handleAddFlashCard}
          actionIcon={<AddBoxIcon />}
        >
          FlashCards
        </SidebarItem>
      </SidebarList>
    </Block>
  );
}

export default MenuBlock;
