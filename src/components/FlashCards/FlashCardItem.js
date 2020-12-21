import React, { useState } from 'react';
import { Box, Grid, IconButton, Link, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
        alignItems: 'flex-start',
    },
    tags: {
        fontSize: '14px',
        fontWeight: '700',
    },
    tagsLink: {
        marginRight: theme.spacing(1),
    },
    titleContainer: {
        marginBottom: theme.spacing(2),
    },
    header: {
        flexGrow: '0',
    },
    title: {
        fontWeight: '700',
        maxHeight: '100px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    icon: {
        marginRight: theme.spacing(1),
        cursor: 'pointer',
    },
    content: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    footer: {
        marginTop: 'auto',
    },
    footerBox: {
        marginRight: theme.spacing(1),
    }
}));

function FlashCardItem({ id, title, content, tags, likesCount, commentsCount, starsCount, handleRefetchFlashCards, className, size }) {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles(size);
    const tagsList = tags.map(item => <Link key={`${item.id}_${item.name}`} component={RouterLink} className={classes.tagsLink} to={`/tag/${item.name}`}>#{item.name}</Link>);
    const history = useHistory();
    const { deleteFlashCard } = useDeleteFlashCard(id);

    const handleDeleteClick = () => setDeleteDialogOpen(true);
    const handleEditClick = () => history.push(`/flashcards/${id}/edit`);
    const handleDeleteDialogClose = () => setDeleteDialogOpen(false);
    const handleDeleteDialogSubmit = () => deleteFlashCard().then(() => handleRefetchFlashCards());
    const handleShowFlashCard = () => history.push(`/flashcards/${id}`);

    const handleMenuClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    return (
        <Grid container className={`${classes.root} ${className}`}>
            <Grid container item className={classes.header}>
                <Grid item sm={9} container alignItems="center">
                    <Typography className={classes.tags}>{tagsList}</Typography>
                </Grid>
                <Grid item container sm={3} justify="flex-end" display="flex">
                    <IconButton
                        onClick={handleMenuClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
                        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                        <MenuItem onClick={handleShowFlashCard}>Show</MenuItem>
                    </Menu>
                    <DeleteFlashCardDialog
                        open={deleteDialogOpen}
                        flashCardName={title}
                        handleSubmit={handleDeleteDialogSubmit}
                        handleClose={handleDeleteDialogClose}
                    />
                </Grid>
            </Grid>
            <Grid item container sm={12} className={classes.titleContainer}>
                <Typography variant="h5" className={classes.title}>{title}</Typography>
            </Grid>
            <Grid container item className={classes.footer}>
                <Grid item container sm={6} alignItems="center">
                    <Box display="flex" alignItems="center" className={classes.footerBox}>
                        <FavoriteIcon className={classes.icon} />
                        <Typography variant="body2" component="span">{likesCount}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" className={classes.footerBox}>
                        <StarIcon className={classes.icon} />
                        <Typography variant="body2" component="span">{starsCount}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" className={classes.footerBox}>
                        <ChatBubbleIcon className={classes.icon} />
                        <Typography variant="body2" component="span">{commentsCount}</Typography>
                    </Box>
                </Grid>
                <Grid item container sm={6} justify="flex-end">

                </Grid>
            </Grid>
        </Grid>
    );
}

export default FlashCardItem;
