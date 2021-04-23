import { Link as RouterLink } from "react-router-dom";
import React from "react";
import Block from "../Block/Block";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import MenuItemIcon from "../MenuItemIcon/MenuItemIcon";
import SidebarList from "../SidebarMenu/SidebarList";
import SidebarItem from "../SidebarMenu/SidebarItem";
import ROUTES from "../../const/routes";

function MenuBlock() {
  return (
    <Block renderTitle="Navigation">
      <SidebarList>
        <SidebarItem
          button
          component={RouterLink}
          to={ROUTES.Home.path}
        >
          <MenuItemIcon>
            <DashboardRoundedIcon />
          </MenuItemIcon>
          Dashboard
        </SidebarItem>
        <SidebarItem
          button
          component={RouterLink}
          to={ROUTES.Decks.path}
        >
          <MenuItemIcon>
            <ViewCarouselRoundedIcon />
          </MenuItemIcon>
          Decks
        </SidebarItem>
        <SidebarItem
          button
          component={RouterLink}
          to={ROUTES.FlashCards.path}
        >
          <MenuItemIcon>
            <RecentActorsRoundedIcon />
          </MenuItemIcon>
          FlashCards
        </SidebarItem>
      </SidebarList>
    </Block>
  );
}

export default MenuBlock;
