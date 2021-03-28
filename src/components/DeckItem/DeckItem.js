import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import FlashCard from '../FlashCard/FlashCard';

const useStyles = makeStyles((theme) => ({
    titleLink: {
        textDecoration: 'none',
        color: '#000',

        '&:hover': {
            color: theme.palette.primary.main,
        }
    },
    title: {
        fontWeight: 'bold',
    },
}));

function DeckItem({ id, className, cardsCount, title, likesCount, commentsCount }) {
    const classes = useStyles();

    return (
        <FlashCard
            className={className}
            headerLeft={<Typography variant="subtitle2">{cardsCount} cards</Typography>}
            headerRight={<StarIcon />}
            likesCount={likesCount}
            commentsCount={commentsCount}
        >
            <Link to={`/decks/${id}`} className={classes.titleLink}>
                <Typography variant="h4" className={classes.title}>{title}</Typography>
            </Link>
        </FlashCard>
    );
}

DeckItem.propTypes = {
    id: PropTypes.number.isRequired,
    cardsCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
}

export default DeckItem;
