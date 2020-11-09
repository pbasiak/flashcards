import { MenuItem, MenuList } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Block from '../Block/Block';
import ViewCarouselRoundedIcon from '@material-ui/icons/ViewCarouselRounded';
import RecentActorsRoundedIcon from '@material-ui/icons/RecentActorsRounded';
import MenuItemIcon from '../MenuItemIcon/MenuItemIcon';

function MenuBlock() {
    return (
        <Block renderTitle="Navigation">
            <MenuList>
                <MenuItem button component={RouterLink} to="/decks" color="inherit"><MenuItemIcon><ViewCarouselRoundedIcon /></MenuItemIcon> Decks</MenuItem>
                <MenuItem button component={RouterLink} to="/flashcards" color="inherit"><MenuItemIcon><RecentActorsRoundedIcon /></MenuItemIcon> FlashCards (soon)</MenuItem>
            </MenuList>
        </Block>
    );
}

export default MenuBlock;
