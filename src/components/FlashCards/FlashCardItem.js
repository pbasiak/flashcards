import React from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        zIndex: '1',
        maxWidth: '600px',
    },
    root: {
        position: 'initial',
        zIndex: '1',
        background: 'linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(253,228,121,1) 70%, rgba(253,228,121,1) 100%)',
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
    },
    tags: {
        fontSize: '14px',
        fontWeight: '700',
    },
    likes: {
        marginRight: theme.spacing(2),
    },
    titleContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: '700',
    },
    icon: {
        marginRight: theme.spacing(1),
        cursor: 'pointer',
    },
    content: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    }
}));

function FlashCardItem({ id, title, content, tags, likesCount, commentsCount, handleShowCard }) {
    const classes = useStyles();
    const tagsList = tags.map(item => `#${item.name} `);

    return (
        <div className={classes.container}>
            <Grid container className={classes.root} alignContent="flex-start">
                <Grid item sm={9} container alignItems="center">
                    <div className={classes.tags}>{tagsList}</div>
                </Grid>
                <Grid item container sm={3} justify="flex-end">
                    <StarIcon />
                </Grid>
                <Grid item container sm={12} className={classes.titleContainer}>
                    <Typography variant="h5" className={classes.title}>{title}</Typography>
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
                    <Button onClick={() => handleShowCard(id)}>Show card</Button>
                </Grid>}
            </Grid>
        </div>
    );
}

export default FlashCardItem;
