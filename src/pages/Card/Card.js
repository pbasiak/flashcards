import React from 'react';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import { useFlashCards } from '../../hooks/useFlashCards';
import FlashCardItem from '../../components/FlashCards/FlashCardItem';
import { Button, Grid } from '@material-ui/core';

function Card() {
    const flashCards = useFlashCards();
    const { title, content, tags } = flashCards.find(item => item.id === 2);

    return (
        <PageTemplate>
            <FlashCardItem title={title} content={content} tags={tags} size="large" />
            <Grid container>
                <Grid item container sm={4}>
                    <Button color="secondary" variant="contained">I don't know</Button>
                </Grid>
                <Grid item container sm={4} justify="center">
                    <Button variant="outlined">Skip</Button>
                </Grid>
                <Grid item container sm={4} justify="flex-end">
                    <Button color="primary" variant="contained">Correct!</Button>
                </Grid>
            </Grid>
        </PageTemplate>
    );
}

export default Card;
