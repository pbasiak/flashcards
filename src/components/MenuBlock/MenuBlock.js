import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Block from '../Block/Block';
import ViewCarouselRoundedIcon from '@material-ui/icons/ViewCarouselRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import MenuItemIcon from '../MenuItemIcon/MenuItemIcon';
import SidebarList from '../SidebarMenu/SidebarList';
import SidebarItem from '../SidebarMenu/SidebarItem';
import ROUTES from '../../const/routes';

function MenuBlock() {
    return (
        <Block renderTitle="Navigation">
            <SidebarList>
                <SidebarItem button component={RouterLink} to={ROUTES.Decks.path} color="inherit"><MenuItemIcon><ViewCarouselRoundedIcon /></MenuItemIcon>Decks</SidebarItem>
                <SidebarItem button component={RouterLink} to={ROUTES.FlashCards.path} color="inherit"><MenuItemIcon><RecentActorsRoundedIcon /></MenuItemIcon>FlashCards</SidebarItem>
                <SidebarItem button component={RouterLink} to={ROUTES.AddFlashCard.path} color="inherit"><MenuItemIcon><RecentActorsRoundedIcon /></MenuItemIcon>Add FlashCard</SidebarItem>
            </SidebarList>
        </Block>
    );
}

export default MenuBlock;
