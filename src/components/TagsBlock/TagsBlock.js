import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { useTags } from "../../hooks/useTags";
import Block from "../Block/Block";
import SidebarItem from "../SidebarMenu/SidebarItem";
import SidebarList from "../SidebarMenu/SidebarList";
import LabelIcon from "@material-ui/icons/Label";

function TagsBlock() {
  const { tags, isTagsLoading } = useTags();

  const tagsList = tags.map((item) => {
    const itemsCount = item.decks.length + item.flashcards.length;

    return (
      <SidebarItem
        key={`${item.id}_${item.name}`}
        button
        to={`/tag/${item.name}`}
        icon={<LabelIcon />}
      >
        {`${item.name} (${itemsCount})`}
      </SidebarItem>
    );
  });

  return (
    <Block renderTitle="My Tags">
      <SidebarList>
        {isTagsLoading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress color="secondary" />
          </Box>
        ) : (
          tagsList
        )}
      </SidebarList>
    </Block>
  );
}

export default TagsBlock;
