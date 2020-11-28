import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFlashCards } from '../../hooks/useFlashCards';
import FlashCardItem from './FlashCardItem';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}));


function FlashCardItemWrapper(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FlashCardItem {...props} />
        </div>
    );
}

function FlashCardsList({ tag, deckId }) {
    const history = useHistory();
    const handleShowCard = (id) => history.push(`/card/${id}`);
    const { flashCards, isFlashCardsLoading } = useFlashCards({ tag, deckId });

    const flashCardsList = flashCards.map(item =>
        <FlashCardItemWrapper key={`${item.id}_${item.title}`} id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />
    );

    const isFlashCardsEmpty = flashCardsList.length < 1;

    return (
        <Grid container>
            {isFlashCardsLoading && <Box display="flex" justifyContent="center" flexGrow="1"><CircularProgress /></Box>}
            {isFlashCardsEmpty && !isFlashCardsLoading ? <Typography variant="body1">Flashcards not found</Typography> : flashCardsList}
        </Grid>
    );
}

export default FlashCardsList;
