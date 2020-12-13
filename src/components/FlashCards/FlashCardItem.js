import React, { useState } from 'react';
import { Box, Button, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDeleteFlashCard } from '../../hooks/useFlashCards';
import DeleteFlashCardDialog from './DeleteFlashCardDialog';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        zIndex: '1',
        maxWidth: '500px',
        width: '500px',
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
    tagsLink: {
        marginRight: theme.spacing(1),
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

function FlashCardItem({ id, title, content, tags, likesCount, commentsCount, handleRefetchFlashCards }) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const classes = useStyles();
    const tagsList = tags.map(item => <Link key={`${item.id}_${item.name}`} component={RouterLink} className={classes.tagsLink} to={`/tag/${item.name}`}>#{item.name}</Link>);
    const history = useHistory();
    const { deleteFlashCard } = useDeleteFlashCard(id);

    const handleDeleteClick = () => setDeleteDialogOpen(true);
    const handleEditClick = () => history.push(`/flashcards/${id}/edit`);
    const handleDeleteDialogClose = () => setDeleteDialogOpen(false);
    const handleDeleteDialogSubmit = () => deleteFlashCard().then(() => handleRefetchFlashCards());
    const handleShowFlashCard = () => history.push(`/flashcards/${id}`);

    return (
        <div className={classes.container}>
            <Grid container className={classes.root} alignContent="flex-start">
                <Grid item sm={9} container alignItems="center">
                    <Typography className={classes.tags}>{tagsList}</Typography>
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
                <Grid item container sm={6} justify="flex-end">
                    <Button startIcon={<DeleteIcon />} onClick={handleDeleteClick}>Delete</Button>
                    <Button onClick={handleEditClick}>Edit</Button>
                    <Button onClick={handleShowFlashCard}>Show</Button>
                </Grid>
            </Grid>
            <DeleteFlashCardDialog
                open={deleteDialogOpen}
                flashCardName={title}
                handleSubmit={handleDeleteDialogSubmit}
                handleClose={handleDeleteDialogClose}
            />
        </div>
    );
}

export default FlashCardItem;
