import React, { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useFlashCards } from "../../hooks/useFlashCards";
import { usePagePagination } from "../../hooks/usePagePagination";
import FlashCardItem from "./FlashCardItem";

import isEmpty from "lodash/isEmpty";

import Pagination from "@material-ui/lab/Pagination";
import Search, { INITIAL_VALUES } from "../Search/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
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

function FlashCardsList({ tag, deckId, limit, searchEnabled }) {
  const classes = useStyles();
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

  const flashCardsList = flashCards.map((item) => (
    <FlashCardItem
      key={`${item.id}_${item.title}`}
      id={item.id}
      title={item.title}
      content={item.content}
      tags={item.tags}
      likesCount={10}
      commentsCount={10}
      handleRefetchFlashCards={refetchFlashCards}
      className={classes.root}
    />
  ));

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
        <Grid container>
          {flashCardsList}
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
};

FlashCardsList.defaultProps = {
  tag: undefined,
  deckId: undefined,
  limit: FLASH_CARDS_LIMIT,
  searchEnabled: false,
  deckView: false,
};

export default FlashCardsList;
