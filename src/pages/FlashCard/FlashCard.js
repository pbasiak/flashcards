import React from 'react';
import { CircularProgress, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useFlashCard } from '../../hooks/useFlashCards';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import ContentFullWidthTemplate from '../../components/ContentFullWidthTemplate/ContentFullWidthTemplate';


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '800px',
    },
    tags: {
        fontWeight: '600',
    },
    content: {},
}));

function FlashCard() {
    const { id } = useParams();
    const { flashCard: { title, content, tags, decks }, isFlashCardLoading } = useFlashCard({ id });
    const classes = useStyles();
    const history = useHistory();
    const tagsList = tags?.map(item => <span key={`${item.id}_${item.name}`}>#{item.name} </span>);
    const decksList = decks?.map(item => <span key={`${item.id}_${item.Title}`}>{item.Title},</span>);

    const handleBack = () => history.push(`/flashcards`);
    const handleEditClick = () => history.push(`/flashcards/${id}/edit`);

    return (
        <PageWithSidebarTemplate title={title} navigation={{ isVisible: true, onBackClick: handleBack, onEditClick: handleEditClick }} isLoading={isFlashCardLoading}>
            <ContentFullWidthTemplate> <>
                <Typography variant="body2">Tags: <span className={classes.tags}>{tagsList}</span> | Decks:  <span className={classes.tags}>{decksList}</span></Typography>
                <div className={classes.content}>
                    {content}
                </div></>
            </ContentFullWidthTemplate>
        </PageWithSidebarTemplate>
    );
}

export default FlashCard;
