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
    content: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));

function FlashCardItem({ title, content, tags, likesCount, commentsCount, handlePlayDeck }) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item container sm={12} justify="flex-end">
                <StarIcon />
            </Grid>
            <Grid item container sm={12}>
                <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item container sm={12} className={classes.content}>
                <Typography>{content}</Typography>
            </Grid>
            <Grid item container sm={6} alignItems="center">
                <Typography component="span" className={classes.likes}>{likesCount} likes</Typography>
                <Typography component="span">{commentsCount} comments</Typography>
            </Grid>
            <Grid item container sm={6} justify="flex-end">
                <Button variant="outlined" onClick={handlePlayDeck}>Read more</Button>
            </Grid>
        </Grid>
    );
}

export default FlashCardItem;
