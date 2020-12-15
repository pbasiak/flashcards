import React, { useState } from 'react';
import { Box, Button, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDeleteFlashCard } from '../../hooks/useFlashCards';
import DeleteFlashCardDialog from './DeleteFlashCardDialog';

const useStyles = makeStyles((theme, props) => ({
    root: {
        position: 'relative',
        background: 'linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 70%, rgba(253,228,121,1) 70%, rgba(253,228,121,1) 100%)',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        boxShadow: '5px 5px 0px #CCD6E1',
        maxWidth: props?.size === 'large' ? '100%' : '500px',
        flex: props?.size === 'large' ? '1 0 100%' : '1 0 500px',
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

function FlashCardItem({ id, title, content, tags, likesCount, commentsCount, handleRefetchFlashCards, className, size }) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const classes = useStyles(size);
    const tagsList = tags.map(item => <Link key={`${item.id}_${item.name}`} component={RouterLink} className={classes.tagsLink} to={`/tag/${item.name}`}>#{item.name}</Link>);
    const history = useHistory();
    const { deleteFlashCard } = useDeleteFlashCard(id);

    const handleDeleteClick = () => setDeleteDialogOpen(true);
    const handleEditClick = () => history.push(`/flashcards/${id}/edit`);
    const handleDeleteDialogClose = () => setDeleteDialogOpen(false);
    const handleDeleteDialogSubmit = () => deleteFlashCard().then(() => handleRefetchFlashCards());
    const handleShowFlashCard = () => history.push(`/flashcards/${id}`);

    return (
        <Grid container className={`${classes.root} ${className}`} alignContent="flex-start" justify="space-between">
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

                <DeleteFlashCardDialog
                    open={deleteDialogOpen}
                    flashCardName={title}
                    handleSubmit={handleDeleteDialogSubmit}
                    handleClose={handleDeleteDialogClose}
                />
            </Grid>
        </Grid>
    );
}

export default FlashCardItem;
