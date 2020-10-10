import React from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

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
    },
    icon: {
        marginRight: theme.spacing(1),
    }
}));

function DeckItem({ cardsCount, name, likesCount, commentsCount, handleShowDeck, handlePlayDeck }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item sm={6} container alignItems="center">
                <Typography variant="subtitle2">{cardsCount} cards</Typography>
            </Grid>
            <Grid item container sm={6} justify="flex-end">
                <StarIcon />
            </Grid>
            <Grid item container sm={12} justify="center" className={classes.title}>
                <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item container sm={6} alignItems="center">
                <Box display="flex" alignItems="center">
                    <FavoriteIcon className={classes.icon} />
                    <Typography variant="body2" component="span" className={classes.likes}>{likesCount} likes</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <ChatBubbleIcon className={classes.icon} />
                    <Typography variant="body2" component="span">{commentsCount} comments</Typography>
                </Box>
            </Grid>
            <Grid item container sm={6} justify="flex-end">
                <Button onClick={handleShowDeck} className={classes.likes}>Show deck</Button>
                <Button color="primary" variant="contained" onClick={handlePlayDeck}>Play</Button>
            </Grid>
        </Grid>
    );
}

export default DeckItem;
