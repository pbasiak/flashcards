import React from 'react';
import { useHistory } from 'react-router-dom';
import DeckItem from '../DeckItem/DeckItem';
import { useDecks } from '../../hooks/useDecks';
import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';

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
    const { decks, isDecksLoading } = useDecks({ tag });
    function handlePlayDeck(e) {
        e.preventDefault();

        history.push(`/deck/${1}`);
    };

    const handleShowDeck = (e, deckId) => {
        e.preventDefault();

        history.push(`/deck/${deckId}`);
    };

    const decksList = decks.map(item =>
        <DeckItemWrapper key={`${item.id}_${item.Title}`} id={item.id} name={item.Title} cardsCount={2} likesCount={item.users.length} commentsCount="12" handlePlayDeck={handlePlayDeck} handleShowDeck={(e) => handleShowDeck(e, item.id)} />
    );

    const isDecksEmpty = decksList.length < 1;

    return (
        <Grid container>
            {
                isDecksLoading ? <Box display="flex" justifyContent="center" flexGrow="1"><CircularProgress /></Box> :
                    isDecksEmpty && !isDecksLoading ? <Typography variant="body1">No decks found</Typography> :
                        [decksList]
            }
        </Grid>
    );
}

export default DecksList;
