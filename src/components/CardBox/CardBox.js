import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        zIndex: '1',
        maxWidth: '500px',
    },
    root: {
        position: 'initial',
        zIndex: '1',
        background: '#FFF',
        padding: theme.spacing(4),
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

function CardBox({children}) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container className={classes.root} alignContent="flex-start">
                {children}
            </Grid>
        </div>
    );
}

export default CardBox;
