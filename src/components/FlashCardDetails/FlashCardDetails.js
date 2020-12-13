import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '800px',
    },
    tags: {
        fontWeight: '600',
    },
    title: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    content: {},
    backButton: {
        marginRight: theme.spacing(1),
    }
}));

function FlashCardDetails({ id, title, content, tags, decks }) {
    const classes = useStyles();
    const history = useHistory();
    const tagsList = tags?.map(item => <span key={`${item.id}_${item.name}`}>#{item.name} </span>);
    const decksList = decks?.map(item => <span key={`${item.id}_${item.Title}`}>{item.Title},</span>);

    return (
        <div className={classes.root}>
            <div>
                <Button startIcon={<ArrowBackIcon />} className={classes.backButton} variant="outlined" size="small" onClick={() => history.push(`/flashcards`)}>Back to list</Button>
                <Button variant="outlined" size="small" onClick={() => history.push(`/flashcards/${id}/edit`)}>Edit</Button>
            </div>
            <br />
            <Typography variant="body2">Tags: <span className={classes.tags}>{tagsList}</span> | Decks:  <span className={classes.tags}>{decksList}</span></Typography>
            <Typography variant="h3" className={classes.title}>{title}</Typography>
            <div className={classes.content}>
                {content}
            </div>
        </div>
    );
}

export default FlashCardDetails;
