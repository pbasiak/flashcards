import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CircularProgress, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { useFlashCards, useFlashCardsCount } from '../../hooks/useFlashCards';
import { usePagePagination } from '../../hooks/usePagePagination';
import FlashCardItem from './FlashCardItem';

import isEmpty from 'lodash/isEmpty';

import Pagination from '@material-ui/lab/Pagination';
import { debounce } from 'lodash-es';

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

const FLASH_CARDS_LIMIT = 2;

function FlashCardsList({ tag, deckId, limit }) {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [searchName, setSearchName] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [flashCardsCount, setFlashCardsCount] = useState(null);
    const { start, page, setPage, pagesCount, handlePaginationChange } = usePagePagination({ limit, count: flashCardsCount });
    const { flashCards, isFlashCardsLoading, refetchFlashCards, flashCardsCount: flashCardsCountData } = useFlashCards({ tag, deckId, limit, start, title: searchName });

    useEffect(() => {
        if (flashCardsCountData) {
            setFlashCardsCount(flashCardsCountData);
        }

    }, [flashCardsCountData]);

    const flashCardsList = flashCards.map(item =>
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
    );

    const searchFlashCards = useCallback(debounce((value) => {
        setSearchName(value);
        setLoading(false);
    }, 1000), []);

    const handleChangeSearch = e => {
        const { value } = e.target;
        setSearch(value)
    };

    useEffect(() => {
        if (search) {
            setLoading(true);
            setPage(1);
            searchFlashCards(search);
        }
    }, [search]);

    const handleClickClear = useCallback(() => {
        setSearch('');
        setSearchName(undefined);
    }, []);

    const isFlashCardsEmpty = isEmpty(flashCardsList);
    const isLoading = isFlashCardsLoading || loading;

    return (
        <Grid container>
            <Grid item container>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="search-input">Name</InputLabel>
                    <OutlinedInput
                        id="search-input"
                        label="Search"
                        value={search}
                        onChange={handleChangeSearch}
                        endAdornment={
                            !!search && <InputAdornment position="end">
                                <IconButton
                                    aria-label="clear value"
                                    onClick={handleClickClear}
                                >
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
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

FlashCardsList.defaultProps = {
    tag: undefined,
    deckId: undefined,
    limit: FLASH_CARDS_LIMIT,
};

export default FlashCardsList;
