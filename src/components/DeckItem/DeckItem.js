import React from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { useDeckPostLike, useDeckPostUnlike } from '../../hooks/useDecks';
import { useUserLike } from '../../hooks/useUser';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(4),
        boxShadow: '4px 4px 8px 0 rgba(0, 0, 0, 0.05)',
        maxWidth: '700px',
        margin: theme.spacing(2),
    },
    likes: {
        marginRight: theme.spacing(2),
    },
    titleContainer: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    title: {
        fontWeight: 'bold',
    },
    icon: {
        marginRight: theme.spacing(1),
        cursor: 'pointer',
    },
    iconActive: {
        fill: 'blue',
    }
}));

function DeckItem({ id, cardsCount, name, likesCount, commentsCount, handleShowDeck, handlePlayDeck }) {
    const classes = useStyles();
    const postLike = useDeckPostLike(id);
    const postUnlike = useDeckPostUnlike(id);

    const onLikeClick = () => postLike();
    const onUnlikeClick = () => postUnlike();

    const userLike = useUserLike('deck', id);

    return (
        <Grid container className={classes.root} alignContent="flex-start">
            <Grid item sm={6} container alignItems="center">
                <Typography variant="subtitle2">{cardsCount} cards</Typography>
            </Grid>
            <Grid item container sm={6} justify="flex-end">
                <StarIcon />
            </Grid>
            <Grid item container sm={12} justify="center" className={classes.titleContainer}>
                <Typography variant="h3" className={classes.title}>{name}</Typography>
            </Grid>
            <Grid item container sm={6} alignItems="center">
                <Box display="flex" alignItems="center">
                    {userLike ? <FavoriteIcon className={`${classes.icon} ${classes.iconActive}`} onClick={onUnlikeClick} />
                        : <FavoriteIcon className={classes.icon} onClick={onLikeClick} />}
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
