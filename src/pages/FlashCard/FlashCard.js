import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useFlashCard } from '../../hooks/useFlashCards';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';
import FlashCardDetails from '../../components/FlashCardDetails/FlashCardDetails';

function FlashCard() {
    const { id } = useParams();
    const { flashCard: { title, content, tags }, isFlashCardLoading } = useFlashCard({ id });

    return (
        <PageWithSidebarTemplate>
            {isFlashCardLoading ? <CircularProgress /> : <FlashCardDetails title={title} content={content} tags={tags} />}
        </PageWithSidebarTemplate>
    );
}

export default FlashCard;
