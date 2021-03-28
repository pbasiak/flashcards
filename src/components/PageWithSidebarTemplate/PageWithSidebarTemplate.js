import React from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Sidebar from '../Sidebar/Sidebar';
import { noop } from 'lodash';


const useStyles = makeStyles(theme => ({
    root: {
        background: '#FFFFFF',
        display: 'flex',
        position: 'relative',
    },
    sidebarContainer: {
        maxWidth: '260px',
    },
    contentContainer: isLoading => ({
        margin: '0',
        background: 'radial-gradient(left 15% top 10%, #FFFFFF, #D4E0EA)',
        justifyContent: isLoading ? 'center' : 'flex-start',
        alignItems: isLoading ? 'center' : 'flex-start',
        alignContent: isLoading ? 'center' : 'flex-start',
    }),
    title: {
        fontSize: '36px',
        fontWeight: '700',
    },
    navigation: {
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 0`,
        flex: '1',
    },
    backButton: {
        marginRight: theme.spacing(1),
    }
}));

function PageWithSidebarTemplate({ children, title, navigation: { isVisible, onBackClick, onEditClick } = {}, isLoading }) {
    const classes = useStyles(isLoading);

    return (
        <Container maxWidth={false} disableGutters={true} className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs className={classes.sidebarContainer}>
                    <Sidebar />
                </Grid>
                <Grid item container xs spacing={8} className={classes.contentContainer}>
                    {isLoading ? <CircularProgress size={72} /> :
                        <>
                            {
                                isVisible && <div className={classes.navigation}>
                                    <Button startIcon={<ArrowBackIcon />} className={classes.backButton} variant="outlined" size="small" onClick={onBackClick}>Back to list</Button>
                                    <Button variant="outlined" size="small" onClick={onEditClick}>Edit</Button>
                                </div>
                            }
                            {
                                title &&
                                <Grid item sm={12} className={classes.title}>
                                    <Typography variant="h1" className={classes.title}>{title}</Typography>
                                </Grid>
                            }
                            <Grid item sm={12}>
                                {children}
                            </Grid>
                        </>
                    }
                </Grid>
            </Grid>
        </Container>
    );
}

PageWithSidebarTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    navigation: PropTypes.shape({
        isVisible: PropTypes.bool,
        onBackClick: PropTypes.func,
        onEditClick: PropTypes.func,
    }),
    isLoading: PropTypes.bool,
};

PageWithSidebarTemplate.defaultProps = {
    navigation: {
        isVisible: false,
        onBackClick: noop,
        onEditClick: noop,
    },
    isLoading: false,
    title: '',
};

export default PageWithSidebarTemplate;
