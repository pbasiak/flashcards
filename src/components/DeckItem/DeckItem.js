import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#f5f5f5',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        marginBottom: theme.spacing(4),
    },
    likes: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));

function DeckItem({ cardsCount, name, likesCount, commentsCount, handleShowDeck, handlePlayDeck }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item container sm={12}>
                <Grid item sm={6} container alignItems="center">{cardsCount} cards</Grid>
                <Grid item container sm={6} justify="flex-end">
                    <StarIcon />
                </Grid>
            </Grid>
            <Grid item container sm={12} justify="center" className={classes.title}>
                <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item container sm={6} alignItems="center">
                <Typography component="span" className={classes.likes}>{likesCount} likes</Typography>
                <Typography component="span">{commentsCount} comments</Typography>
            </Grid>
            <Grid item container sm={6} justify="flex-end">
                <Button onClick={handleShowDeck} className={classes.likes}>Show deck</Button>
                <Button color="primary" variant="contained" onClick={handlePlayDeck}>Play</Button>
            </Grid>
        </Grid>
    );
}

export default DeckItem;
