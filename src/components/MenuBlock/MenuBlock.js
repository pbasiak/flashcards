import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Block from '../Block/Block';

function MenuBlock() {
    return (
        <Block renderTitle="Navigation">
            <List>
                <ListItem button component={RouterLink} to="/decks" color="inherit">
                    <ListItemText>Decks</ListItemText>
                </ListItem>
                <ListItem button component={RouterLink} to="/flashcards" color="inherit">
                    <ListItemText>FlashCards (soon)</ListItemText>
                </ListItem>
            </List>
        </Block>
    );
}

export default MenuBlock;
