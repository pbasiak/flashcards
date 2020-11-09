import { List, ListItem, ListItemText, MenuItem, MenuList } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Block from '../Block/Block';
import ROUTES from '../../const/routes';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import MenuItemIcon from '../MenuItemIcon/MenuItemIcon';

function ProfileMenu() {
    return (
        <Block renderTitle="Profile Menu">
            <MenuList>
                <MenuItem button component={RouterLink} to={ROUTES.Home.path} color="inherit"><MenuItemIcon><DashboardRoundedIcon /></MenuItemIcon> Dashboard</MenuItem>
                <MenuItem button component={RouterLink} to={ROUTES.Logout.path} color="inherit"><MenuItemIcon><ExitToAppRoundedIcon /></MenuItemIcon> Logout</MenuItem>
            </MenuList>
        </Block>
    );
}

export default ProfileMenu;
