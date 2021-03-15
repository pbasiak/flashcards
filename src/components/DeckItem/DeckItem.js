import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Background from './assets/bg.svg';

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
        background:  `url(${Background})`,
        backgroundSize: 'cover',
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

function DeckItem({ cardsCount, name, likesCount, commentsCount, handleShowDeck, handlePlayDeck }) {
    const classes = useStyles();
    const postLike = () => {};
    const postUnlike = () => {};

    const onLikeClick = () => postLike();
    const onUnlikeClick = () => postUnlike();


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
                        {false ? <FavoriteIcon className={`${classes.icon} ${classes.iconActive}`} onClick={onUnlikeClick} />
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

DeckItem.propTypes = {
    cardsCount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    handleShowDeck: PropTypes.func.isRequired,
    handlePlayDeck: PropTypes.func.isRequired,
}

export default DeckItem;
