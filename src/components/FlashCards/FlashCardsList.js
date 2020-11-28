import { Grid, makeStyles, Typography } from '@material-ui/core';
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
    const FlashCardList = () => {
        const { flashCards } = useFlashCards();
        const { flashCardsByTag } = useFlashCards({ tag });
        const { flashCardsByDeck } = useFlashCards({ deckId });

        if (tag) {
            const flashCardsByTagList = flashCardsByTag.map(item => {
                return <FlashCardItemWrapper id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />
            });

            return flashCardsByTagList;
        }

        if (deckId) {
            const flashCardsByDeckList = flashCardsByDeck.map(item => {
                return <FlashCardItemWrapper id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />
            });

            return flashCardsByDeckList;
        }

        const flashCardsList = flashCards.map(item => {

            return <FlashCardItemWrapper id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />;
        });

        return flashCardsList;
    }

    const isFlashCardsEmpty = FlashCardList().length < 1;

    return (
        <Grid container>
            {isFlashCardsEmpty ? <Typography>Flashcards not found</Typography> : <FlashCardList />}
        </Grid>
    );
}

export default FlashCardsList;
