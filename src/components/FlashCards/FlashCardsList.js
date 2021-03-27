import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { useFlashCards, useFlashCardsCount } from '../../hooks/useFlashCards';
import { usePagePagination } from '../../hooks/usePagePagination';
import FlashCardItem from './FlashCardItem';

import isEmpty from 'lodash/isEmpty';

import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    pagination: {
        marginTop: theme.spacing(4),
    },
}));

const DEFAULT_LIMIT = 2;

function FlashCardsList({ tag, deckId, limit = DEFAULT_LIMIT }) {
    const classes = useStyles();
    const { flashCardsCount, isFlashCardsCountLoading } = useFlashCardsCount();
    const { start, page, pagesCount, handlePaginationChange } = usePagePagination({ limit, count: flashCardsCount });
    const { flashCards, isFlashCardsLoading, refetchFlashCards } = useFlashCards({ tag, deckId, limit, start });

    const isLoading = isFlashCardsLoading || isFlashCardsCountLoading;

    const flashCardsList = flashCards.map(item =>
        <FlashCardItem
            key={`${item.id}_${item.title}`}
            id={item.id}
            title={item.title}
            content={item.content}
            tags={item.tags}
            likesCount={10}
            commentsCount={10}
            starsCount={12}
            handleRefetchFlashCards={refetchFlashCards}
            className={classes.root}
        />
    );

    const isFlashCardsEmpty = isEmpty(flashCardsList);

    return (
        <Grid container>
            {
                isLoading ? <Box display="flex" justifyContent="center" flexGrow="1"><CircularProgress /></Box> :
                    isFlashCardsEmpty ? <Typography variant="body1">Flashcards not found</Typography> :
                        <Grid container>
                            {flashCardsList}
                            <Grid item container md={12} justify="center" alignItems="center" alignContent="center">
                                <Pagination className={classes.pagination} count={pagesCount} page={page} onChange={handlePaginationChange} size="large" />
                            </Grid>
                        </Grid>

            }
        </Grid>
    );
}

FlashCardsList.propTypes = {
    tag: PropTypes.string,
    deckId: PropTypes.number,
};

// Default props will not work, don't pass it to useFlashCards ? or it should be undefined??????

export default FlashCardsList;
