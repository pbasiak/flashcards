import React from 'react';
import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { useFlashCards } from '../../hooks/useFlashCards';
import FlashCardItem from './FlashCardItem';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}));

function FlashCardsList({ tag, deckId }) {
    const classes = useStyles();
    const { flashCards, isFlashCardsLoading, refetchFlashCards } = useFlashCards({ tag, deckId });

    const flashCardsList = flashCards.map(item =>
        <FlashCardItem
            key={`${item.id}_${item.title}`}
            id={item.id}
            title={item.title}
            content={item.content}
            tags={item.tags}
            likesCount="12"
            commentsCount="10"
            handleRefetchFlashCards={refetchFlashCards}
            className={classes.root}
        />
    );

    const isFlashCardsEmpty = flashCardsList.length < 1;

    return (
        <Grid container>
            {
                isFlashCardsLoading ? <Box display="flex" justifyContent="center" flexGrow="1"><CircularProgress /></Box> :
                    isFlashCardsEmpty ? <Typography variant="body1">Flashcards not found</Typography> :
                        flashCardsList
            }
        </Grid>
    );
}

export default FlashCardsList;
