import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useFlashCardAuthor, useFlashCards } from "../../hooks/useFlashCards";
import { usePagePagination } from "../../hooks/usePagePagination";
import FlashCardItem from "./FlashCardItem";

import isEmpty from "lodash/isEmpty";

import Pagination from "@material-ui/lab/Pagination";
import Search, { INITIAL_VALUES } from "../Search/Search";
import FlashCardList from "../FlashCard/FlashCardList";
import { DEFAULT_AUTHOR } from "../../const/flashCard";
import { FLASH_CARD_STATUS_PUBLISH } from "../../const/status";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginBottom: theme.spacing(2),
    // marginTop: theme.spacing(2),
    // marginRight: theme.spacing(2),
  },
  cardList: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  pagination: {
    marginTop: theme.spacing(4),
  },
  emptyContainer: {
    marginTop: theme.spacing(8),
    textAlign: "center",
  },
}));

const FLASH_CARDS_LIMIT = 10;

function FlashCardsList({ status, tag, deckId, limit, searchEnabled }) {
  const classes = useStyles();
  const { isAuthor } = useFlashCardAuthor();
  const [form, setForm] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);
  const [flashCardsCount, setFlashCardsCount] = useState(null);
  const {
    start,
    page,
    setPage,
    pagesCount,
    handlePaginationChange,
  } = usePagePagination({
    limit: form?.pageSize || limit,
    count: flashCardsCount,
  });
  const {
    flashCards,
    isFlashCardsLoading,
    refetchFlashCards,
    flashCardsCount: flashCardsCountData,
  } = useFlashCards({
    tag: form?.tag || tag,
    deckId,
    limit: form?.pageSize || limit,
    start,
    status,
    title: form?.search,
  });

  useEffect(() => {
    if (flashCardsCountData) {
      setFlashCardsCount(flashCardsCountData);
    }
  }, [flashCardsCountData]);

  useEffect(() => {
    if (loading) {
      setPage(1);
      setLoading(false);
    }
  });

  const flashCardsList = flashCards.map((item) => {
    const author =
      item?.author !== null ? item?.author?.username : DEFAULT_AUTHOR;
    const authorId = item?.author?.id;

    return (
      <FlashCardItem
        key={`${item.id}_${item.title}`}
        id={item.id}
        title={item.title}
        content={item.content}
        tags={item.tags}
        handleRefetchFlashCards={refetchFlashCards}
        className={classes.root}
        author={author}
        updatedAt={item.updated_at}
        isAuthor={isAuthor(authorId)}
      />
    );
  });

  const isFlashCardsEmpty = isEmpty(flashCardsList);
  const isLoading = isFlashCardsLoading || loading;

  return (
    <Grid container>
      {!!searchEnabled && (
        <Grid item container>
          <Search form={form} setForm={setForm} setLoading={setLoading} />
        </Grid>
      )}
      {isLoading ? (
        <Box display="flex" justifyContent="center" flexGrow="1">
          <CircularProgress />
        </Box>
      ) : isFlashCardsEmpty ? (
        <Box width="100%" className={classes.emptyContainer}>
          <Typography variant="h5">Nothing here :(</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          <FlashCardList list={flashCardsList} />
          <Grid
            item
            container
            md={12}
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <Pagination
              className={classes.pagination}
              count={pagesCount}
              page={page}
              onChange={handlePaginationChange}
              size="large"
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

FlashCardsList.propTypes = {
  tag: PropTypes.string,
  deckId: PropTypes.number,
  limit: PropTypes.number,
  searchEnabled: PropTypes.bool,
  deckView: PropTypes.bool,
  status: PropTypes.string,
};

FlashCardsList.defaultProps = {
  status: FLASH_CARD_STATUS_PUBLISH,
  tag: undefined,
  deckId: undefined,
  limit: FLASH_CARDS_LIMIT,
  searchEnabled: false,
  deckView: false,
};

export default FlashCardsList;
