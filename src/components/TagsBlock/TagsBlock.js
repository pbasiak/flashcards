import { ListItem, UnorderedList, Link as CarbonLink } from 'carbon-components-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTags } from '../../hooks/useTags';
import Block from '../Block/Block';

function TagsBlock() {
    const tags = useTags();

    const tagsList = tags.map(item => {
        const itemsCount = item.decks.length + item.flashcards.length;

        return (
            <ListItem>
                <Link to={`/tag/${item.name}`} className="bx--link">
                    {`#${item.name} (${itemsCount})`}
                </Link>
            </ListItem>
        );
    });


    return (
        <Block>
            <h3>My Tags</h3>
            <UnorderedList>
                {tagsList}
            </UnorderedList>
        </Block>
    );
}

export default TagsBlock;
