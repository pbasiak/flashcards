import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFlashCards, useFlashCardsByDeck, useFlashCardsByTag } from '../../hooks/useFlashCards';
import FlashCardItem from './FlashCardItem';

function FlashCardsList({ tag, deckId }) {
    const history = useHistory();
    const handleShowCard = (id) => history.push(`/card/${id}`);
    const FlashCardList = () => {
        const flashCards = useFlashCards();
        const flashCardsByTag = useFlashCardsByTag(tag);
        const flashCardsByDeck = useFlashCardsByDeck(deckId);

        if (tag) {
            const flashCardsByTagList = flashCardsByTag.map(item => {
                return <FlashCardItem id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />
            });

            return flashCardsByTagList;
        }

        if (deckId) {
            const flashCardsByDeckList = flashCardsByDeck.map(item => {
                return <FlashCardItem id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />
            });

            return flashCardsByDeckList;
        }

        const flashCardsList = flashCards.map(item => {
            return <FlashCardItem id={item.id} title={item.title} content={item.content} tags={item.tags} likesCount="12" commentsCount="10" handleShowCard={handleShowCard} />;
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
