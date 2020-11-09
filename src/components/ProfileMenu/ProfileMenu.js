import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import Block from '../Block/Block';
import ROUTES from '../../const/routes';

function ProfileMenu() {
    return (
        <Block renderTitle="Profile Menu">
            <List>
            <ListItem button component={RouterLink} to={ROUTES.Home.path} color="inherit">
                    <ListItemText>Dashboard</ListItemText>
                </ListItem>
                <ListItem button component={RouterLink} to={ROUTES.Logout.path} color="inherit">
                    <ListItemText>Logout</ListItemText>
                </ListItem>
            </List>
        </Block>
    );
}

export default ProfileMenu;
