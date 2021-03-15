import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, makeStyles, Typography } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDeleteFlashCard } from '../../hooks/useFlashCards';
import DeleteFlashCardDialog from './DeleteFlashCardDialog';
import FlashCard from '../FlashCard/FlashCard';
import FlashCardMenu from './FlashCardMenu';

const useStyles = makeStyles((theme, props) => ({
    tags: {
        fontSize: '14px',
        fontWeight: '700',
    },
    tagsLink: {
        marginRight: theme.spacing(1),
    },
    title: {
        fontWeight: '700',
        maxHeight: '100px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        textDecoration: 'none',
        color: '#000',
    },
    link: {
        textDecoration: 'none',
    }
}));


function FlashCardItem({ id, title, tags, likesCount, commentsCount, starsCount, handleRefetchFlashCards, className }) {
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
        <FlashCard
            className={className}
            headerLeft={<Typography className={classes.tags}>{tagsList}</Typography>}
            headerRight={<FlashCardMenu id={`Menu${id}`} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} onShowFlashCard={handleShowFlashCard} />}
            likesCount={likesCount || '?'} // TODO: remove ?
            starsCount={commentsCount || '?'}
            commentsCount={starsCount || '?'}
        >
            <RouterLink to={`/flashcards/${id}`} className={classes.link}>
                <Typography variant="h5" className={classes.title}>{title}</Typography>
            </RouterLink>
            <DeleteFlashCardDialog
                open={deleteDialogOpen}
                flashCardName={title}
                handleSubmit={handleDeleteDialogSubmit}
                handleClose={handleDeleteDialogClose}
            />
        </FlashCard>
    );
}

FlashCardItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    likesCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
    starsCount: PropTypes.number.isRequired,
    handleRefetchFlashCards: PropTypes.func.isRequired,
    className: PropTypes.string,
};

FlashCardItem.defaultProps = {
    className: null,
}

export default FlashCardItem;
