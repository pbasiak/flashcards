import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DeckItem from '../DeckItem/DeckItem';
import { useDecks } from '../../hooks/useDecks';
import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { usePagePagination } from '../../hooks/usePagePagination';
import Pagination from '@material-ui/lab/Pagination';
import { isEmpty } from 'lodash-es';

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

const DECKS_LIMIT = 2;

function DecksList({ tag, limit }) {
    const classes = useStyles();
    const [decksCount, setDecksCount] = useState(null);
    const { start, page, pagesCount, handlePaginationChange } = usePagePagination({ limit, count: decksCount });
    const { decks, isDecksLoading, decksCount: decksCountData } = useDecks({ tag, limit, start });

    useEffect(() => {
        if (decks) {
            setDecksCount(decksCountData);
        }

    }, [decks]);

    const decksList = decks.map(item =>
        <DeckItem
            key={`${item.id}_${item.Title}`}
            id={item.id}
            title={item.Title}
            cardsCount={2}
            likesCount={item.users.length}
            commentsCount={12}
            className={classes.root}
        />
    );

    const isDecksEmpty = isEmpty(decks);

    return (
        <Grid container>
            {
                isDecksLoading ? <Box display="flex" justifyContent="center" flexGrow="1"><CircularProgress /></Box> :
                    isDecksEmpty && !isDecksLoading ? <Typography variant="body1">No decks found</Typography> :
                        <Grid container>
                            {decksList}
                            <Grid item container md={12} justify="center" alignItems="center" alignContent="center">
                                <Pagination className={classes.pagination} count={pagesCount} page={page} onChange={handlePaginationChange} size="large" />
                            </Grid>
                        </Grid>
            }
        </Grid>
    );
}

DecksList.propTypes = {
    tag: PropTypes.string,
};

DecksList.defaultProps = {
    tag: undefined,
    limit: DECKS_LIMIT,
};

export default DecksList;
