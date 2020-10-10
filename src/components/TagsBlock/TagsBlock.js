import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTags } from '../../hooks/useTags';
import Block from '../Block/Block';

function TagsBlock() {
    const tags = useTags();
    const history = useHistory();

    const tagsList = tags.map(item => {
        const itemsCount = item.decks.length + item.flashcards.length;
        const onClick = () => history.push(`/tag/${item.name}`);

        return (
            <ListItem button onClick={onClick}>
                <ListItemText>{`#${item.name} (${itemsCount})`}</ListItemText>
            </ListItem>
        );
    });


    return (
        <Block renderTitle="My Tags">
            <List>
                {tagsList}
            </List>
        </Block>
    );
}

export default TagsBlock;
