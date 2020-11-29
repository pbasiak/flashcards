import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '800px',
    },
    tags: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
    },
    content: {},
}));

function FlashCardDetails({title, content, tags}) {
    const classes = useStyles();
    const tagsList = tags.map(item => <span>#{item.name}</span>)

    return (
        <div className={classes.root}>
            <div className={classes.tags}>{tagsList}</div>
            <Typography variant="h3" className={classes.title}>{title}</Typography>
            <div className={classes.content}>
                {content}
            </div>
        </div>
    );
}

export default FlashCardDetails;
