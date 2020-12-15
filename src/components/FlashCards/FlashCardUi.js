import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
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
}));

// TODO: Depends on UI - it's rotated div with background, decide if it's needed after UI is complete.
function FlashCardUi() {
    const classes = useStyles();

    return (
        <div className={classes.root}></div>
    );
}

export default FlashCardUi;
