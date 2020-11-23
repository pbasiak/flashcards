import React from 'react';
import FlashCardsList from '../../components/FlashCards/FlashCardsList';
import PageWithSidebarTemplate from '../../components/PageWithSidebarTemplate/PageWithSidebarTemplate';

function FlashCards() {
    return (
        <PageWithSidebarTemplate title={<>Search <strong>FlashCards</strong></>}>
            <FlashCardsList />
        </PageWithSidebarTemplate>
    );
}

export default FlashCards;
