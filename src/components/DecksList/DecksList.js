import React from 'react';
import { useHistory } from 'react-router-dom';
import DeckItem from '../DeckItem/DeckItem';
import { useDecks } from '../../hooks/useDecks';
import { useFlashCards } from '../../hooks/useFlashCards';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    }
}));

function DeckItemWrapper(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <DeckItem {...props} />
        </div>
    );
}

function DecksList({ tag }) {
    const history = useHistory();
    const { decks } = useDecks();
    const { decksByTag } = useDecks({ tag: tag });
    const { flashCards } = useFlashCards();

    function handlePlayDeck(e) {
        e.preventDefault();

        history.push(`/deck/${1}`);
    };

    function handleShowDeck(e) {
        e.preventDefault();

        history.push(`/deck/${1}`);
    };

    console.log(decks);

    const DecksListAll = () => {
        if (tag) {
            const decksByTagList = decksByTag.map(item => {
                const cardsCount = flashCards.map(({ decks }) => decks).filter(deck => deck.find(element => element.id.toString() === item.id.toString()));
                return <DeckItemWrapper id={item.id} name={item.Title} cardsCount={cardsCount.length} likesCount={item.users.length} commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={handleShowDeck} />;
            });

            return decksByTagList;
        }

        const decksList = decks.map(item => {
            const cardsCount = flashCards.map(({ decks }) => decks).filter(deck => deck.find(element => element.id.toString() === item.id.toString()));
            return <DeckItemWrapper id={item.id} name={item.Title} cardsCount={cardsCount.length} likesCount={item.users.length} commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={handleShowDeck} />;
        });

        return decksList;
    };

    const isDecksEmpty = DecksListAll().length < 1;

    return (
        <Grid container>
            {isDecksEmpty ? <Typography variant="body">No decks found</Typography> : <DecksListAll />}
        </Grid>
    );
}

export default DecksList;
