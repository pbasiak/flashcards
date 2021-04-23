import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useFlashCard } from "../../hooks/useFlashCards";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import ContentFullWidthTemplate from "../../components/ContentFullWidthTemplate/ContentFullWidthTemplate";
import { getColorByTag } from "../../utils/getColorByTag";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "800px",
  },
  tags: {
    fontWeight: "600",
  },
  content: {},
  tagItem: {
    marginRight: theme.spacing(1),
  },
  deckItem: {
    marginRight: theme.spacing(1),
  },
}));

function FlashCard() {
  const { id } = useParams();
  const {
    flashCard: { title, content, tags, decks },
    isFlashCardLoading,
  } = useFlashCard({ id });
  const classes = useStyles();
  const history = useHistory();
  const tagUrl = (tag) => history.push(`/tag/${tag}`);
  const deckUrl = (deckId) => history.push(`/decks/${deckId}`);
  const tagsList = tags?.map((item) => (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      onClick={() => tagUrl(item.name)}
      className={classes.tagItem}
    >
      <span key={`${item.id}_${item.name}`}>#{item.name}</span>
    </Button>
  ));
  const decksList = decks?.map((item) => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      onClick={() => deckUrl(item.id)}
      className={classes.deckItem}
    >
      <span key={`${item.id}_${item.Title}`}>{item.Title}</span>
    </Button>
  ));

  const handleBack = () => history.push(`/flashcards`);
  const handleEditClick = () => history.push(`/flashcards/${id}/edit`);

  return (
    <PageWithSidebarTemplate
      title={title}
      navigation={{
        isVisible: true,
        onBackClick: handleBack,
        onEditClick: handleEditClick,
      }}
      isLoading={isFlashCardLoading}
    >
      <Box display="flex" alignItems="center" marginBottom="32px">
        <Box className="tags" marginRight="16px">
          <span className={classes.tags}>{tagsList}</span>
        </Box>
        <Box className="decks">
          <span className={classes.tags}>{decksList}</span>
        </Box>
      </Box>
      <ContentFullWidthTemplate>
        <>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </>
      </ContentFullWidthTemplate>
    </PageWithSidebarTemplate>
  );
}

export default FlashCard;
