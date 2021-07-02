import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import DeckItem from "../DeckItem/DeckItem";
import { useDecks } from "../../hooks/useDecks";
import {
  Box,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { usePagePagination } from "../../hooks/usePagePagination";
import Pagination from "@material-ui/lab/Pagination";
import { isEmpty } from "lodash-es";
import Search, { INITIAL_VALUES } from "../Search/Search";
import FlashCardList from "../FlashCard/FlashCardList";
import { DEFAULT_AUTHOR } from "../../const/flashCard";
import { DECK_STATUS_PUBLISH } from "../../const/status";

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

const DECKS_LIMIT = 2;

function DecksList({ status, tag, limit, searchEnabled, authorId }) {
  const classes = useStyles();
  const [form, setForm] = useState(INITIAL_VALUES);
  const [loading, setLoading] = useState(false);
  const [decksCount, setDecksCount] = useState(undefined);
  const {
    start,
    page,
    setPage,
    pagesCount,
    handlePaginationChange,
  } = usePagePagination({ limit: form?.pageSize || limit, count: decksCount });
  const {
    decks,
    isDecksLoading,
    decksCount: decksCountData,
    isDecksCountLoading,
  } = useDecks({
    tag: form?.tag || tag,
    limit: form?.pageSize || limit,
    start,
    status,
    author: authorId,
    title: form?.search,
    ...(form?.level && { level: form.level }),
  });

  useEffect(() => {
    if (decksCountData) {
      setDecksCount(decksCountData);
    }
  }, [decksCountData]);

  useEffect(() => {
    if (loading) {
      setPage(1);
      setLoading(false);
    }
  });

  const decksList = decks.map((item) => {
    const author =
      item.author !== null ? item?.author?.username : DEFAULT_AUTHOR;
    const badge = item.status === DECK_STATUS_PUBLISH ? undefined : "private";

    return (
      <DeckItem
        key={`${item.id}_${item.title}`}
        id={item.id}
        title={item.title}
        className={classes.root}
        author={author}
        cardsCount={item.flashcards.length}
        updatedAt={item.updated_at}
        level={item.level}
        badge={badge}
      />
    );
  });

  const isDecksEmpty = isEmpty(decks);
  const isLoading = isDecksLoading || loading;

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
      ) : isDecksEmpty && !isDecksLoading ? (
        <Box width="100%" className={classes.emptyContainer}>
          <Typography variant="h5">Nothing here :(</Typography>
        </Box>
      ) : (
        <Grid container>
          <FlashCardList list={decksList} />
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

DecksList.propTypes = {
  status: PropTypes.string,
  tag: PropTypes.string,
  limit: PropTypes.number,
  searchEnabled: PropTypes.bool,
  authorId: PropTypes.number,
};

DecksList.defaultProps = {
  status: DECK_STATUS_PUBLISH,
  tag: undefined,
  limit: DECKS_LIMIT,
  searchEnabled: false,
  authorId: undefined,
};

export default memo(DecksList);
