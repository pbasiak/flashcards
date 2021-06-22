import { Box, CircularProgress } from "@material-ui/core";
import React, { memo } from "react";
import { useTags } from "../../hooks/useTags";
import Block from "../Block/Block";
import SidebarItem from "../SidebarMenu/SidebarItem";
import SidebarList from "../SidebarMenu/SidebarList";
import LabelIcon from "@material-ui/icons/Label";
import ROUTES from "../../const/routes";
import {
  DECK_STATUS_PUBLISH,
  FLASH_CARD_STATUS_PUBLISH,
} from "../../const/status";

function TagsBlock() {
  const { tags, isTagsLoading } = useTags();

  const tagsList = tags.map((item) => {
    const deckList = item.decks.filter(
      (element) => element.status === DECK_STATUS_PUBLISH
    );
    const flashCardsList = item.flashcards.filter(
      (element) => element.status === FLASH_CARD_STATUS_PUBLISH
    );
    const itemsCount = deckList.length + flashCardsList.length;

    return (
      <SidebarItem
        key={`${item.id}_${item.name}`}
        button
        to={`${ROUTES.TagBase.path}/${item.name}`}
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

export default memo(TagsBlock);
