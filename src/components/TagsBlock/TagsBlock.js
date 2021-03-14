import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTags } from '../../hooks/useTags';
import Block from '../Block/Block';
import SidebarItem from '../SidebarMenu/SidebarItem';
import SidebarList from '../SidebarMenu/SidebarList';
import LabelIcon from '@material-ui/icons/Label';
import MenuItemIcon from '../MenuItemIcon/MenuItemIcon';

function TagsBlock() {
    const { tags, isTagsLoading } = useTags();
    const history = useHistory();

    const tagsList = tags.map(item => {
        const itemsCount = item.decks.length + item.flashcards.length;
        const onClick = () => history.push(`/tag/${item.name}`);

        return (
            <SidebarItem key={`${item.id}_${item.name}`} button to={`/tag/${item.name}`} onClick={onClick}>
                <MenuItemIcon><LabelIcon /></MenuItemIcon> {`${item.name} (${itemsCount})`}
            </SidebarItem>
        );
    });


    return (
        <Block renderTitle="My Tags">
            <SidebarList>
                {isTagsLoading ? <Box display="flex" justifyContent="center"><CircularProgress color="secondary" /></Box> : tagsList}
            </SidebarList>
        </Block>
    );
}

export default TagsBlock;
