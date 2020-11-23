import React from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import sunnyImg from './sunny.jpg';
import lilyWhiteImg from './lily_white.jpg';
import { useDeckPostLike, useDeckPostUnlike } from '../../hooks/useDecks';
import { useUserLike } from '../../hooks/useUser';

// https://products.ls.graphics/mesh-gradients/ - GRADIENTS TO USE
const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        zIndex: '1',
        maxWidth: '600px',
    },
    root: {
        position: 'initial',
        zIndex: '1',
        backgroundColor: '#FCF7D9',
        background: `url(${lilyWhiteImg})`,
        backgroundSize: '100% auto',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        
        '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#CCD6E1',
            borderRadius: theme.spacing(2),
            top: '0',
            left: '0',
            transform: 'translateX(5px) translateY(5px) rotate(1deg)',
            zIndex: '-1',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '#B0BBC6',
            borderRadius: theme.spacing(2),
            top: '0',
            left: '0',
            transform: 'translateX(8px) translateY(5px) rotate(2deg)',
            zIndex: '-2',
        },
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
        <div className={classes.container}>
            <Grid container className={classes.root} alignContent="flex-start">
                <Grid item sm={6} container alignItems="center">
                    <Typography variant="subtitle2">{cardsCount} cards</Typography>
                </Grid>
                <Grid item container sm={6} justify="flex-end">
                    <StarIcon />
                </Grid>
                <Grid item container sm={12} justify="flex-start" className={classes.titleContainer}>
                    <Typography variant="h4" className={classes.title}>{name}</Typography>
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
                    <Button variant="outlined" onClick={handlePlayDeck}>Play</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeckItem;
