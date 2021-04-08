import { Link as RouterLink } from "react-router-dom";
import React from "react";
import Block from "../Block/Block";
import ROUTES from "../../const/routes";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MenuItemIcon from "../MenuItemIcon/MenuItemIcon";
import SidebarItem from "../SidebarMenu/SidebarItem";
import SidebarList from "../SidebarMenu/SidebarList";

function ProfileMenu() {
  return (
    <Block renderTitle="Profile Menu">
      <SidebarList>
        <SidebarItem
          button
          component={RouterLink}
          to={ROUTES.Home.path}
          color="inherit"
        >
          <MenuItemIcon>
            <DashboardRoundedIcon />
          </MenuItemIcon>{" "}
          Dashboard
        </SidebarItem>
        <SidebarItem
          button
          component={RouterLink}
          to={ROUTES.Logout.path}
          color="inherit"
        >
          <MenuItemIcon>
            <ExitToAppRoundedIcon />
          </MenuItemIcon>{" "}
          Logout
        </SidebarItem>
      </SidebarList>
    </Block>
  );
}

export default ProfileMenu;
