import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTags } from '../../hooks/useTags';
import Block from '../Block/Block';
import SidebarItem from '../SidebarMenu/SidebarItem';
import SidebarList from '../SidebarMenu/SidebarList';

function TagsBlock() {
    const { tags } = useTags();
    const history = useHistory();

    const tagsList = tags.map(item => {
        const itemsCount = item.decks.length + item.flashcards.length;
        const onClick = () => history.push(`/tag/${item.name}`);

        return (
            <SidebarItem key={`${item.id}_${item.name}`} button to={`/tag/${item.name}`} onClick={onClick}>
                {`#${item.name} (${itemsCount})`}
            </SidebarItem>
        );
    });


    return (
        <Block renderTitle="My Tags">
            <SidebarList>
                {tagsList}
            </SidebarList>
        </Block>
    );
}

export default TagsBlock;
