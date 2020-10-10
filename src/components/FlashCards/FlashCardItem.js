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
    },
    content: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));

function FlashCardItem({ id, title, content, tags, likesCount, commentsCount, handleShowCard }) {
    const classes = useStyles();
    const tagsList = tags.map(item => `#${item.Name} `);

    return (
        <Grid container className={classes.root}>
            <Grid item sm={9} container alignItems="center">
                <Typography variant="subtitle2">{tagsList}</Typography>
            </Grid>
            <Grid item container sm={3} justify="flex-end">
                <StarIcon />
            </Grid>
            <Grid item container sm={12}>
                <Typography variant="h5" className={classes.title}>{title}</Typography>
            </Grid>
            <Grid item container sm={12} className={classes.content}>
                <Typography>{content}</Typography>
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
            {handleShowCard && <Grid item container sm={6} justify="flex-end">
                <Button variant="outlined" onClick={() => handleShowCard(id)}>Show card</Button>
            </Grid>}
        </Grid>
    );
}

export default FlashCardItem;
